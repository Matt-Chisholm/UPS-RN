import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ColorCounter from "../components/ColorCounter";

export default function SquareScreen() {
  return (
    <View>
      <ColorCounter color='Red' />
    </View>
  );
}

const styles = StyleSheet.create({});
