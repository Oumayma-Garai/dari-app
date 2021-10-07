import React from "react";
import Colors from "../constants/colors";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";

const TypeItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.typeBox, ...props.style }}>
        <Text style={styles.typeText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  typeText: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.default,
  },
  typeBox: {
    width: 100,
    height: 50,
    backgroundColor: Colors.background,
    borderRadius: 3,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default TypeItem;
