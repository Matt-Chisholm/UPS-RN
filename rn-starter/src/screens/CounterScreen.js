import { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function CounterScreen() {
  const [state, dispatch] = useReducer(
    // state === { count: number }
    // action === { type: 'increment' || 'decrement', payload: 1 }
    (state, action) => {
      switch (action.type) {
        case "increment":
          return { ...state, counter: state.counter + action.payload };
        case "decrement":
          return { ...state, counter: state.counter - action.payload };
        default:
          return state;
      }
    },
    { counter: 0 }
  );

  const { counter } = state;

  return (
    <View>
      <Text>Current Count: {counter}</Text>
      <Button
        title='Increase'
        onPress={() => dispatch({ type: "increment", payload: 1 })}
      />
      <Button
        title='Decrease'
        onPress={() => dispatch({ type: "decrement", payload: 1 })}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
