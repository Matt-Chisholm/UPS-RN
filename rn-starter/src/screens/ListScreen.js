import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";

export default function ListScreen() {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 45 },
    { name: "Friend #3", age: 32 },
    { name: "Friend #4", age: 27 },
    { name: "Friend #5", age: 53 },
    { name: "Friend #6", age: 30 },
    { name: "Friend #7", age: 21 },
    { name: "Friend #8", age: 19 },
    { name: "Friend #9", age: 18 },
  ];

  return (
    <View>
      <FlatList
        data={friends}
        renderItem={(el) => {
          return (
            <Text>
              {el.item.name} - Age {el.item.age}
            </Text>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
