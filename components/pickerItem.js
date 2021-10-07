import React from "react";
import Colors from "../constants/colors";
import { Picker, StyleSheet, View } from "react-native";
import { CITIES } from "../data/cities";
const PickerItem = (props) => {
  return (
    <Picker style={styles.picker} onValueChange={() => {}}>
      {CITIES.map((item) => {
        return (
          <Picker.Item label={item.label} value={item.value} key={item.value} />
        );
      })}
    </Picker>
  );
};
const styles = StyleSheet.create({
  picker: {
    backgroundColor: Colors.background,
  },
});
export default PickerItem;
