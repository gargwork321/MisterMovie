import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  fetchMoviesWithCategoryId,
  searchMovieWith,
} from "../../network/network";
import Categories from "./components/Categories";
import BottomDisplay from "./components/BottomDisplay";
import { Strings } from "../../constants/Strings";
import { debounce } from "lodash";
import Screens from "../../constants/Screens";

const Home = ({ navigation }) => {
  const [movies, setMovies] = useState<any>([]);
  const [selectedCat, setSelectedCat] = useState("Now Playing");

  const fetchMovies = async (catID = 1) => {
    setMovies([]);
    const _ = await fetchMoviesWithCategoryId(catID).then((data) => {
      setMovies(data.results);
    });
  };
  const searchMovieWithText = async (text) => {
    const _ = await searchMovieWith(text).then((data) => {
      navigation.navigate(Screens.SEARCHING, {
        results: data.results,
      });
    });
  };
  const changeCategory = useCallback((cat) => {
    setSelectedCat(cat.title);
    fetchMovies(cat.id);
  }, []);
  const updatedText = (value) => {
    if (value !== "") {
      searchMovieWithText(value);
    }
  };
  const handleTextDebounce = useCallback(debounce(updatedText, 1200), []);

  //Hooks
  useEffect(() => {
    // API call for now playing movies
    fetchMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.pagePadding}>
        <Text style={styles.greeting}>
          {Strings.home.greeting}
          <Text> Vivek!</Text>
        </Text>
        <Text style={styles.subtitle}>{Strings.home.subtitle}</Text>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            onChangeText={handleTextDebounce}
            autoCorrect={false}
          />
        </View>
        <Text style={styles.catTitle}>{Strings.home.categories}</Text>
        <Categories onCategorySelection={changeCategory} />
        <BottomDisplay
          title={selectedCat}
          movies={movies}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A2B35",
    flex: 1,
  },
  pagePadding: {
    padding: 20,
  },
  greeting: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
    paddingBottom: 5,
  },
  subtitle: {
    color: "gray",
    fontSize: 16,
  },
  searchInput: {
    fontSize: 20,
    color: "white",
    flex: 1,
  },
  searchBox: {
    backgroundColor: "gray",
    marginTop: 25,
    height: 50,
    borderRadius: 15,
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  catTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 20,
  },
});

export default Home;
