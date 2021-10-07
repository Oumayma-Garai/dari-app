import React from "react";
import Colors from "../constants/colors";
import { Slider, StyleSheet } from "react-native";
const SliderItem = (props) => {
  return (
    <Slider
      style={{
        width: "100%",
        height: 25,

        transform: [{ rotateZ: "-180deg" }],
      }}
      minimumValue={0}
      maximumValue={700.0}
      minimumTrackTintColor={Colors.second}
      maximumTrackTintColor=""
      thumbTintColor={Colors.second}
      thumbStyle={styles.thumb}
    />
  );
};
const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 58,
  },
});
export default SliderItem;
