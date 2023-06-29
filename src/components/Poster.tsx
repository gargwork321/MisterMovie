import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { imgBaseUrl } from "../config/movieApi";
import { ImageSizes } from "../constants/constants";

const Poster = (movie) => {
  const size = ImageSizes.w342;
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
    width: 250,
    height: 350,
    margin: 10,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 5,
    resizeMode: "cover",
  },
});

export default Poster;
