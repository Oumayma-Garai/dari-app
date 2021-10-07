import React from "react";
import Colors from "../constants/colors";
import { Text, StyleSheet, View } from "react-native";
const TitleText = (props) => {
  return (
    <Text style={{ ...styles.title, ...props.style }}>{props.children}</Text>
  );
};
const styles = StyleSheet.create({
  textContainer: { marginRight: 15 },

  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.default,
  },
});
export default TitleText;
