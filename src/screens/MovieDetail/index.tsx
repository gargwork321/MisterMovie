import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { fetchMovieDetail } from "../../network/network";
import { imgBaseUrl } from "../../config/movieApi";
import { ImageSizes } from "../../constants/Constants";
import { Dimensions } from "react-native";
import LocalImages from "../../constants/LocalImages";
import { Strings } from "../../constants/Strings";
import { convertMinutesToHoursAndMinutes } from "../../helpers/helper";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MovieDetail = ({ route }) => {
  const movieId = route.params.movieID;
  const [movieDetails, setMovieDetails] = useState(null);
  const { w342 } = ImageSizes;
  const navigation = useNavigation();

  //Hooks
  useEffect(() => {
    // API call for now playing movies
    fetchMovieDetails(movieId);
  }, []);

  //Functions
  const backToHome = () => {
    navigation.goBack();
  };

  const fetchMovieDetails = async (movieId) => {
    const _ = await fetchMovieDetail(movieId).then((data) => {
      setMovieDetails(data);
    });
  };

  return movieDetails ? (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.bgPoster}
          source={{ uri: imgBaseUrl + w342 + movieDetails?.poster_path }}
          blurRadius={10}
        />
        <Image
          style={styles.fgPoster}
          source={{ uri: imgBaseUrl + w342 + movieDetails?.poster_path }}
        />
        <TouchableOpacity style={styles.backButton} onPress={backToHome}>
          <Image style={styles.backImg} source={LocalImages.back_arrow} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.bottomContainer}>
        <Text style={styles.title}>{movieDetails?.original_title}</Text>
        <Text style={styles.plotTitle}>{Strings.detail.plot}</Text>
        <Text style={styles.overview}>{movieDetails.overview}</Text>
        <Text style={styles.orangeTitle}>
          {Strings.detail.genre}
          {movieDetails.genres.map((item) => (
            <Text style={styles.whiteFont}>{item.name}, </Text>
          ))}
        </Text>
        <Text style={styles.orangeTitle}>
          {Strings.detail.releaseDate}
          <Text style={styles.whiteFont}>{movieDetails.release_date}</Text>
        </Text>
        <Text style={styles.orangeTitle}>
          {Strings.detail.runtime}
          <Text style={styles.whiteFont}>
            {convertMinutesToHoursAndMinutes(movieDetails.runtime)}
          </Text>
        </Text>
        <Text style={styles.orangeTitle}>
          {Strings.detail.lang}
          {movieDetails.spoken_languages.map((item) => (
            <Text style={styles.whiteFont}>{item.english_name}, </Text>
          ))}
        </Text>
        <Image source={LocalImages.film_reel} style={styles.watermark} />
      </ScrollView>
    </View>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A2B35",
    flex: 1,
  },
  bgPoster: {
    width: windowWidth,
    height: windowHeight / 2,
    resizeMode: "cover",
  },
  fgPoster: {
    position: "absolute",
    width: windowWidth,
    height: windowHeight / 2,
    resizeMode: "contain",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  backImg: {
    width: 40,
    height: 40,
    alignSelf: "center",
  },
  bottomContainer: {
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 25,
  },
  plotTitle: {
    color: "orange",
    fontWeight: "600",
    fontSize: 18,
    marginTop: 20,
  },
  overview: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 10,
    minHeight: 150,
  },
  orangeTitle: {
    color: "orange",
    marginTop: 10,
  },
  whiteFont: {
    color: "#fff",
  },
  watermark: {
    position: "absolute",
    width: 300,
    height: 300,
    bottom: 0,
    right: 0,
    opacity: 0.1,
  },
});

export default MovieDetail;
