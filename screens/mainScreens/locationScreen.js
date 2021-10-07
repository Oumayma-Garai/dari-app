import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import CheckBoxItem from "../../components/checkBoxItem";
import Colors from "../../constants/colors";
import TitleText from "../../components/titleText";
import TypeItem from "../../components/typeItem";
import SliderItem from "../../components/sliderItem";
import PickerItem from "../../components/pickerItem";
const LocationScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.basicContainer}>
          <View style={styles.itemsContainer}>
            <CheckBoxItem>إيجار</CheckBoxItem>
            <CheckBoxItem> تأجير</CheckBoxItem>
          </View>
        </View>
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

        <View style={styles.buttonImageContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {}}
              style={styles.appButtonContainer}
            >
              <Text style={styles.appButtonText}> بحث </Text>
            </TouchableOpacity>
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

    justifyContent: "space-between",
  },
  basicContainer: {
    marginTop: 15,
    marginHorizontal: 17,
  },

  itemsContainer: {
    marginTop: 10,
    flexDirection: "row-reverse",
    justifyContent: "space-around",
  },
  selectAreaContainer: {
    marginTop: 15,
    width: "95%",
    alignSelf: "center",
  },
  descriptionBox: {
    backgroundColor: Colors.background,
    width: "92%",
    alignSelf: "center",
    borderRadius: 5,
    height: 70,
    overflow: "hidden",
    textAlignVertical: "top",
  },
  image: {
    width: 100,
    height: 90,
  },
  typeBox: {
    width: 50,
  },
  picker: {
    borderRadius: 5,
  },
  buttonImageContainer: {
    marginTop: 15,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonContainer: {
    width: 206,
    marginVertical: 30,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: Colors.second,
    height: 50,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 95,
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
export default LocationScreen;
