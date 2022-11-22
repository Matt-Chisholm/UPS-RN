import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

export default function ColorCounter({ color, onIncrease, onDecrease }) {
  return (
    <View style={styles.viewStyle}>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={onIncrease} />
      <Button title={`Decrease ${color}`} onPress={onDecrease} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    margin: 2,
    padding: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
  },
});
