import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function ImageDetail(props) {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.title}</Text>
      <Text>Image Score - {props.score}</Text>
      <Image source={props.imageSource} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 200,
    borderWidth: 3,
    borderColor: "black",
    margin: 5,
    padding: 5,
  },
  textStyle: {
    fontSize: 30,
  },
});
