import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import Colors from "../constants/colors";
import { AntDesign } from "@expo/vector-icons";

const DetailModel = (props) => {
  const data = [
    props.numroom,
    props.numbath,
    props.numkitchen,
    props.numliving,
    props.numgarden,
    props.numparking,
  ];
  const renderDetailItem = (index, data) => {
    
    if (data[index] === props.numroom && props.numroom !="") {
      return (
        <View>
          <Image source={require("../assets/details/room.png")} />
          <Text> {data[index]} </Text>
        </View>
      );
    }
    if (data[index] === props.numbath && props.numbath!="") {
      return (
        <View>
          <Image source={require("../assets/details/1.png")} />
          <Text> {data[index]} </Text>
        </View>
      );
    } if (data[index] === props.numkitchen && props.numkitchen!="") {
      return (
        <View>
          <Image source={require("../assets/details/kitchen.png")} />
          <Text> {data[index]} </Text>
        </View>
      );
    } 
    if (data[index] === props.numliving && props.numliving!="") {
      return (
        <View>
          <Image source={require("../assets/details/living.png")} />
          <Text> {data[index]} </Text>
        </View>
      );
    } 
    if (data[index] === props.numgarden && props.numgarden!="") {
      return (
        <View>
          <Image source={require("../assets/details/garden.png")} />
          <Text> {data[index]} </Text>
        </View>
      );
    }
    if (data[index] === props.numparking && props.numparking!="") {
      return (
        <View>
          <Image source={require("../assets/details/parking.png")} />
          <Text> {data[index]} </Text>
        </View>
      );
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={props.image} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}> {props.price} DT </Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.type}> {props.type}</Text>
        <View style={styles.locationIconContainer}>
          <Text style={styles.location}> {props.location}</Text>
          <AntDesign name="enviromento" size={18} color={Colors.second} />
        </View>

        <Text
          style={{
            fontSize: 13,
            lineHeight: 22,
            letterSpacing: -0.24,
            textAlign: "right",
          }}
        >
          {" "}
          فيرو ايوس ايت أكيوساميوس ايت أيوستو أودايو دايجنس بلاندايتاييس
          برايسينتايوم فوليوبتاتيوم ديلينايتاي أتكيوي كورر أت فيرو ايوس ايت
          أكيوساميوس ايت أيوستو أودايو دايجنس
        </Text>
      </View>
      <View>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={({ index }) => (
            <View style={styles.element} key={index}>{renderDetailItem(index, data)}</View>
          )}
        />
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    height: "50%",

    width: "100%",
    marginBottom: -50,
  },
  priceContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    width: 140,
    backgroundColor: Colors.backgroundPrice,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 0.07,
    textAlign: "center",
  },
  description: {
    flex: 1,
    marginHorizontal: 25,
    alignSelf: "center",
  },
  type: {
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: -0.26,
    color: "black",
  },
  location: {
    marginVertical: 4,
    color: Colors.locationcolor,
    fontSize: 14,
    lineHeight: 20,
  },
  locationIconContainer: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  element:{
    margin:10
  }
});
export default DetailModel;
