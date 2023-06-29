import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { fetchMoviesWithCategoryId } from "../../network/network";
import Categories from "./components/Categories";
import BottomDisplay from "./components/BottomDisplay";
import { Strings } from "../../constants/Strings";
import { Movie } from "../../model/Movie";

const Home = () => {
  const [movies, setMovies] = useState<any>([]);
  const [selectedCat, setSelectedCat] = useState("Now Playing");

  //Hooks
  useEffect(() => {
    // API call for now playing movies
    fetchMovies();
  }, []);

  const fetchMovies = async (catID = 1) => {
    setMovies([]);
    const _ = await fetchMoviesWithCategoryId(catID).then((data) => {
      setMovies(data.results);
    });
  };

  const changeCategory = (cat) => {
    setSelectedCat(cat.title);
    fetchMovies(cat.id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.pagePadding}>
        <Text style={styles.greeting}>
          {Strings.home.greeting}
          <Text> Ruchi!</Text>
        </Text>
        <Text style={styles.subtitle}>{Strings.home.subtitle}</Text>
        <View style={styles.searchBox}>
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.catTitle}>{Strings.home.categories}</Text>
          <TouchableOpacity style={styles.centerJustfication}>
            <Text style={styles.seeAllBtn}>{Strings.home.seeAll}</Text>
          </TouchableOpacity>
        </View>
        <Categories onCategorySelection={changeCategory} />
        <BottomDisplay title={selectedCat} movies={movies} />
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
    flex: 1,
    fontSize: 20,
    color: "white",
  },
  searchBox: {
    backgroundColor: "gray",
    marginTop: 30,
    height: 50,
    borderRadius: 15,
    textAlign: "center",
    fontSize: 20,
    padding: 15,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  catTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 20,
  },
  seeAllBtn: {
    color: "orange",
    alignSelf: "center",
    fontSize: 16,
  },
  centerJustfication: {
    justifyContent: "center",
  },
});
export default Home;
