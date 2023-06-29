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
        style={{
          width: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => onCategorySelection(cat)}
      >
        <View
          style={{
            backgroundColor: "gray",
            width: 60,
            height: 60,
            justifyContent: "center",
            borderRadius: 5,
          }}
        >
          <Image
            style={{
              width: 50,
              height: 50,
              alignSelf: "center",
            }}
            source={cat.img}
          />
        </View>
        <Text style={{ color: "#fff", marginTop: 5 }}>{cat.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      {categories.map((cat) => formCategory(cat))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Categories;
