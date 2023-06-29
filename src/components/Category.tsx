import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Category = () => {
  return (
    <View style={{ width: 80, justifyContent: "center" }}>
      <View
        style={{
          backgroundColor: "gray",
          width: 60,
          height: 60,
          justifyContent: "center",
          borderRadius: 5,
          alignSelf: "center",
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            alignSelf: "center",
          }}
          source={require("../../assets/popcorn.png")}
        />
      </View>
      <Text style={{ color: "#fff" }}>Now Playing</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Category;
