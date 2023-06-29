import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { fetchNowPlayingMovies } from "../../network/network";
import Poster from "../../components/Poster";
import Category from "../../components/Category";

const Home = () => {
  const [movies, setMovies] = useState<any>([]);

  //Hooks
  useEffect(() => {
    // API call for now playing movies
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const _ = await fetchNowPlayingMovies().then((data) => {
      // console.log(data.results[0]);
      setMovies(data.results);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 20 }}>
        <Text style={styles.greeting}>
          Hello<Text style={{ fontWeight: "normal" }}> Ruchi!</Text>{" "}
        </Text>
        <Text style={styles.username}>Watch your favourite movie</Text>
        <View style={styles.searchBox}>
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: "600",
              marginVertical: 20,
            }}
          >
            Categories
          </Text>
          <TouchableOpacity style={{ justifyContent: "center" }}>
            <Text style={{ color: "orange", alignSelf: "center" }}>
              See all &gt;
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Category />
          <Category />
          <Category />
          <Category />
        </View>

        <Text
          style={{
            color: "#fff",
            fontSize: 24,
            fontWeight: "600",
            marginVertical: 20,
          }}
        >
          Categories
        </Text>
        <FlatList
          data={movies}
          horizontal
          renderItem={(movie) => {
            return <Poster movie={movie.item} />;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },

  greeting: {
    fontWeight: "bold",
    color: "white",
    fontSize: 25,
    paddingBottom: 5,
  },

  username: {
    color: "gray",
    fontSize: 15,
  },

  searchInput: {
    flex: 1,
    fontSize: 20,
    color: "white",
  },
  searchBox: {
    backgroundColor: "gray",
    marginTop: 30,
    height: 60,
    borderRadius: 15,
    textAlign: "center",
    fontSize: 20,
    padding: 15,
  },
});
export default Home;
