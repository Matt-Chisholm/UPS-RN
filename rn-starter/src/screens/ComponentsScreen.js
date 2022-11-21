import { Text, View, StyleSheet } from "react-native";
import React from "react";

const ComponentsScreen = () => {
  const greeting = "My name is Matt";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={styles.subHeaderStyle}>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
