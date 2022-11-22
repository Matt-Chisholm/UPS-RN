import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

export default function TextScreen() {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='sentences'
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      {name.length < 5 ? (
        <Text>Password must be longer than 5 characters</Text>
      ) : null}
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
