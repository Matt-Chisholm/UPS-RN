import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import ColorCounter from "../components/ColorCounter";

export default function SquareScreen() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log(red, green, blue);

  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease={() => setRed(red + 100)}
        onDecrease={() => setRed(red - 100)}
      />
      <ColorCounter
        color='Green'
        onIncrease={() => setGreen(green + 100)}
        onDecrease={() => setGreen(green - 100)}
      />
      <ColorCounter
        color='Blue'
        onIncrease={() => setBlue(blue + 100)}
        onDecrease={() => setBlue(blue - 100)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
