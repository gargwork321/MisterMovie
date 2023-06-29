import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Constants } from "../constants/constants";

type props = {
  onCategorySelection: (cat: any) => void;
};

const Categories = ({ onCategorySelection }: props) => {
  const categories = Constants.categories;

  const formCategory = (cat): JSX.Element => {
    return (
      <TouchableOpacity
        style={styles.box}
        onPress={() => onCategorySelection(cat)}
      >
        <View style={styles.iconView}>
          <Image style={styles.img} source={cat.img} />
        </View>
        <Text style={{ color: "#fff", marginTop: 5 }}>{cat.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {categories.map((cat) => formCategory(cat))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  box: {
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  iconView: {
    backgroundColor: "gray",
    width: 60,
    height: 60,
    justifyContent: "center",
    borderRadius: 5,
  },
  img: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
});

export default Categories;
