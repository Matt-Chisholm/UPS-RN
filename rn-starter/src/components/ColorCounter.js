import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

export default function ColorCounter(props) {
  return (
    <View>
      <Text>{props.color}</Text>
      <Button title='Increase' />
      <Button title='Decrease' />
    </View>
  );
}

const styles = StyleSheet.create({});
