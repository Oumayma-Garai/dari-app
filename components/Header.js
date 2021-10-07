import React from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import Colors from "../constants/colors";
const Header = (props) => {
  return <StatusBar backgroundColor={Colors.second} barStyle="light-content" />;
};
const styles = StyleSheet.create({});
export default Header;
