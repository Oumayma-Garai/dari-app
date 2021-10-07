import React, { useState } from "react";
import Colors from "../constants/colors";
import { CheckBox, StyleSheet, View, Text } from "react-native";
import { CITIES } from "../data/cities";
const chechBoxItem = (props) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
      />
      <Text style={styles.label}>{props.children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
export default chechBoxItem;
