import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Poster from "./Poster";

type ListingProps = {
  title: string;
  movies: [];
  // onTap:()=>();
};
const BottomDisplay = ({ title, movies }: ListingProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={movies}
        horizontal
        renderItem={({ item }) => <Poster movie={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default BottomDisplay;

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
