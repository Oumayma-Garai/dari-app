import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { CITIES } from "../../data/cities";
import Colors from "../../constants/colors";

import TitleText from "../../components/titleText";
import TypeItem from "../../components/typeItem";
import SliderItem from "../../components/sliderItem";
import PickerItem from "../../components/pickerItem";
const SellingScreen = (props) => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.basicContainer}>
        <TitleText> النوع</TitleText>
        <View style={styles.itemsContainer}>
          <TypeItem onPress={() => {}}>فيلا </TypeItem>
          <TypeItem onPress={() => {}}>شقة</TypeItem>
          <TypeItem onPress={() => {}}>منزل </TypeItem>
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
      <View style={styles.basicContainer}>
        <TitleText> المبلغ</TitleText>
        <View style={styles.basicContainer}>
          <SliderItem />
        </View>
      </View>
      <View style={styles.basicContainer}>
        <TitleText> المكان</TitleText>
        <View style={styles.selectAreaContainer}>
          <PickerItem />
        </View>
      </View>
      <View style={styles.selectAreaContainer}>
        <TextInput
          multiline={true}
          numberOfLines={4}
          maxLength={100}
          style={styles.descriptionBox}
          placeholder="اضافة وصف"
        />
      </View>
      <View style={styles.buttonImageContainer}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/Group-23.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}> تأكيد </Text>
          </TouchableOpacity>
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
  },
  appButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
  },
});
export default SellingScreen;
