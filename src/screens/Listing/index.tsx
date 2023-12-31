import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { imgBaseUrl } from "../../config/movieApi";
import LocalImages from "../../constants/LocalImages";
import { ImageSizes } from "../../constants/Constants";
import Screens from "../../constants/Screens";
import EasyImage from "../../components/EasyImage";

const Listing = ({ navigation, route }) => {
  const { title, movies } = route.params;
  const size = ImageSizes.w185;

  //Functions
  const backToHome = () => {
    navigation.goBack();
  };
  const showMovieDetails = (id) => {
    navigation.navigate(Screens.MOVIE_DETAIL, { movieID: id });
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={backToHome}>
          <EasyImage style={styles.backImg} localImage={LocalImages.back} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <FlatList
        numColumns={2}
        data={movies}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
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
    justifyContent: "space-between",
    paddingRight: 20,
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
    margin: 5,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 15,
  },
  thumbnail: {
    height: 250,
    resizeMode: "cover",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
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
