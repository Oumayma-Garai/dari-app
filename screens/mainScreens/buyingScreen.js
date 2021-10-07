import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { View, Text, StyleSheet, Picker, ScrollView } from "react-native";
import { CITIES } from "../../data/cities";
import Colors from "../../constants/colors";
import TitleText from "../../components/titleText";
import TypeItem from "../../components/typeItem";
import SliderItem from "../../components/sliderItem";
import PickerItem from "../../components/pickerItem";
const BuyingScreen = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <ScrollView style={styles.screen}>
      <View>
        <View style={styles.basicContainer}>
          <TitleText> المكان</TitleText>
          <View style={styles.selectAreaContainer}>
            <PickerItem />
          </View>
        </View>
        <View style={styles.basicContainer}>
          <TitleText> النوع</TitleText>
          <View style={styles.itemsContainer}>
            <TypeItem onPress={() => {}}>فيلا </TypeItem>
            <TypeItem onPress={() => {}}>شقة</TypeItem>
            <TypeItem onPress={() => {}}>منزل </TypeItem>
          </View>
        </View>
        <View style={styles.basicContainer}>
          <TitleText> المبلغ</TitleText>
          <View style={styles.basicContainer}>
            <SliderItem />
          </View>
        </View>
        <View style={styles.basicContainer}>
          <TitleText>عدد الغرف </TitleText>
          <View style={styles.itemsContainer}>
            <TypeItem onPress={() => {}} style={styles.typeBox}>
              1
            </TypeItem>
            <TypeItem onPress={() => {}} style={styles.typeBox}>
              {" "}
              2
            </TypeItem>
            <TypeItem onPress={() => {}} style={styles.typeBox}>
              {" "}
              3{" "}
            </TypeItem>
            <TypeItem onPress={() => {}} style={styles.typeBox}>
              {" "}
              4{" "}
            </TypeItem>
            <TypeItem onPress={() => {}} style={styles.typeBox}>
              +
            </TypeItem>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  basicContainer: {
    marginTop: 15,
    marginHorizontal: 17,
  },
  selectAreaContainer: {
    marginTop: 15,
    width: "95%",
    alignSelf: "center",
  },
  itemsContainer: {
    marginTop: 10,
    flexDirection: "row-reverse",
    justifyContent: "space-around",
  },
  typeBox: {
    width: 50,
  },
});
export default BuyingScreen;
