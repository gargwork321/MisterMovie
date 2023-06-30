import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { imgBaseUrl } from "../../../config/movieApi";
import { ImageSizes } from "../../../constants/Constants";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import Screens from "../../../constants/Screens";
import EasyImage from "../../../components/EasyImage";

type PosterProps = {
  movie: any;
  navigation: NavigationProp<any, any>;
};

const Poster = ({ navigation, movie }: PosterProps) => {
  const size = ImageSizes.w342;
  const imgSource = movie.poster_path
    ? imgBaseUrl + size + movie.poster_path
    : null;

  //Functions
  const showMovieDetails = () => {
    navigation.navigate(Screens.MOVIE_DETAIL, { movieID: movie.id });
  };
  return (
    <TouchableOpacity onPress={showMovieDetails}>
      <EasyImage style={styles.poster} webImage={imgSource} />
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
