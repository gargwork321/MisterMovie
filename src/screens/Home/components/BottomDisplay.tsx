import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Poster from "./Poster";
import { NavigationProp } from "@react-navigation/native";
import { Strings } from "../../../constants/Strings";
import Screens from "../../../constants/Screens";

type ListingProps = {
  title: string;
  movies: [];
  navigation: NavigationProp<any, any>;
};
const BottomDisplay = ({ navigation, title, movies }: ListingProps) => {
  const showAllMovies = () => {
    navigation.navigate(Screens.LISTING, {
      movies: movies,
      title: title,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity
          style={styles.centerJustfication}
          onPress={showAllMovies}
        >
          <Text style={styles.seeAllBtn}>{Strings.home.seeAll}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={movies}
        horizontal
        renderItem={({ item }) => (
          <Poster movie={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 15,
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

export default BottomDisplay;
