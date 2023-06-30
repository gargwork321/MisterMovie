import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { imgBaseUrl } from "../../config/movieApi";
import LocalImages from "../../constants/LocalImages";
import { ImageSizes } from "../../constants/Constants";
import Screens from "../../constants/Screens";
import { debounce } from "lodash";
import { searchMovieWith } from "../../network/network";
import EasyImage from "../../components/EasyImage";

const Listing = ({ navigation, route }) => {
  const [movies, setMovies] = useState(route.params.results);
  const [searchString, setSearchString] = useState("");
  const size = ImageSizes.w185;

  //Functions
  const backToHome = () => {
    navigation.goBack();
  };
  const showMovieDetails = (id) => {
    navigation.push(Screens.MOVIE_DETAIL, { movieID: id });
  };
  const updatedText = (value) => {
    setSearchString(value);
  };
  const handleTextDebounce = useCallback(debounce(updatedText, 1200), []);

  const searchMovieWithText = async () => {
    const _ = await searchMovieWith(searchString).then((data) => {
      setMovies(data.results);
    });
  };
  const renderItem = (movie) => {
    const imgPath = movie.poster_path
      ? imgBaseUrl + size + movie.poster_path
      : null;
    return (
      <TouchableOpacity
        style={styles.resultBox}
        onPress={() => showMovieDetails(movie.id)}
      >
        <EasyImage style={styles.thumbnail} webImage={imgPath} />
        <Text style={styles.movieTitle}>{movie.title}</Text>
      </TouchableOpacity>
    );
  };

  //Hooks
  useEffect(() => {
    if (searchString !== "") {
      searchMovieWithText();
    }
  }, [searchString]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={backToHome}>
          <EasyImage style={styles.backImg} localImage={LocalImages.back} />
        </TouchableOpacity>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            onChangeText={handleTextDebounce}
            autoCorrect={false}
          />
        </View>
      </View>
      <FlatList
        numColumns={2}
        data={movies}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A2B35",
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  backImg: {
    width: 40,
    height: 40,
    alignSelf: "center",
  },
  resultBox: {
    paddingVertical: 10,
    flexDirection: "column",
    flex: 1,
    margin: 1,
  },
  thumbnail: {
    width: 150,
    height: 225,
    resizeMode: "cover",
    borderRadius: 10,
  },
  movieTitle: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
    fontWeight: "500",
    flex: 1,
  },
  searchInput: {
    fontSize: 20,
    color: "white",
    flex: 1,
  },
  searchBox: {
    backgroundColor: "gray",
    height: 50,
    borderRadius: 15,
    fontSize: 20,
    padding: 10,
    marginRight: 10,
    flex: 1,
  },
});

export default Listing;
