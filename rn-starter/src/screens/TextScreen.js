import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function TextScreen() {
  return (
    <View>
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 50,
    borderColor: "black",
    borderWidth: 1,
  },
});
