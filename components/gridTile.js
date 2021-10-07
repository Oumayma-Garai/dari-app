import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const GridTile = (props) => {
  return (
    <TouchableOpacity style={styles.gridTile} onPress={props.onSelect}>
      <View
        style={{ ...styles.container, ...{ backgroundImage: props.imageUrl } }}
      >
        {" "}
      </View>
      <Text style={styles.text} numberOfLines={2}>
        {props.price}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({});
export default GridTile;
