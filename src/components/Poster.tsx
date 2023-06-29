import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { imgBaseUrl } from "../config/movieApi";

const Poster = (movie) => {
  const size = "w300/";
  //   console.warn(imgBaseUrl + size + movie.movie.poster_path);
  return (
    <TouchableOpacity>
      <Image
        style={styles.poster}
        source={{ uri: imgBaseUrl + size + movie.movie.poster_path }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  poster: {
    width: 220,
    height: 300,
    margin: 10,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 5,
    resizeMode: "cover",
  },
});

export default Poster;
