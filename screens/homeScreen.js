import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ConnexionScreen from "./connexionScreen";
import Colors from "../constants/colors";
const HomeScreen = (props) => {
  return (
    <LinearGradient
      colors={[Colors.first, Colors.second, Colors.third]}
      style={styles.LinearGradient}
    >
      <View style={styles.mainView}>
        <View styles={styles.logoContainer}>
          <View style={styles.ImageContainer}>
            <Image
              source={require("../assets/dari.png")}
              style={styles.Image}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.DariText}>DARI</Text>

            <Text style={styles.VenteText}>VENTE ET ACHAT VILLA ET MAISON</Text>
          </View>
        </View>
        <View style={styles.buttonContainers}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate({
                  routeName: "connexion",
                });
              }}
              style={styles.appButtonContainer}
            >
              <Text style={styles.appButtonText}> دخول</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate({
                  routeName: "cell",
                });
              }}
              style={styles.appButtonContainer}
            >
              <Text style={styles.appButtonText}> تسجيل</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
HomeScreen.navigationOptions = (navigationData) => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  LinearGradient: {
    height: "100%",
  },
  logoContainer: {
    width: "100%",
  },
  mainView: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  Image: {
    width: 80,
    height: 67,
  },
  ImageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: "100%",
  },
  VenteText: {
    color: "white",
    opacity: 0.5,
    textAlign: "justify",
    fontSize: 10,
    marginTop: -10,
    marginLeft: 3,
  },
  DariText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 78,
    textAlign: "justify",
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
  appButtonText: {
    fontSize: 18,
    color: Colors.first,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default HomeScreen;
