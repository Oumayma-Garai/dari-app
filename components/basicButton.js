import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Colors from "../constants/colors";
const BasicButton = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => {}} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{props.children} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appButtonText: {
    fontSize: 18,
    color: Colors.first,
    fontWeight: "bold",
    alignSelf: "center",
  },
  buttonContainer: {
    width: 206,
    marginVertical: 15,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#ffff",
    height: 50,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});
export default BasicButton;
