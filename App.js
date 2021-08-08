import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Navbar from "./App/Component/Web/Navbar";

export default function App() {
  if (Platform.OS === "web") {
    return <Navbar />;
  } else {
    return (
      <View>
        <Text>asdjhgasdg</Text>
      </View>
    );
  }
}
