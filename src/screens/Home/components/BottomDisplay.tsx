import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Poster from "../../../components/Poster";

type ListingProps = {
  title: string;
  movies: [];
};
const BottomDisplay = ({ title, movies }: ListingProps) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={movies}
        horizontal
        renderItem={({ item }) => {
          return <Poster movie={item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default BottomDisplay;

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 25,
  },
});
