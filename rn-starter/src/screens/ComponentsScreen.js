import { Text, View } from "react-native";
import React, { Component } from "react";

const ComponentsScreen = () => {
  const greeting = "Hi there!";
  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
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
