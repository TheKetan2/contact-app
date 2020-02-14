import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Contacts from "./screens/Contacts";
import Profile from "./screens/Profile";
export default function App() {
  return <Profile />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
