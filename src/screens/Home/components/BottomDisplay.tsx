import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Poster from "./Poster";
import { NavigationProp } from "@react-navigation/native";

type ListingProps = {
  title: string;
  movies: [];
  navigation: NavigationProp<any, any>;
};
const BottomDisplay = ({ navigation, title, movies }: ListingProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 15,
  },
});

export default BottomDisplay;
