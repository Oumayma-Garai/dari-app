import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import SplashScreen from "./screens/splashScreen";
import HomeScreen from "./screens/homeScreen";
import CellScreen from "./screens/cellScreen";
import BuyScreen from "./screens/buyScreen";
import RentScreen from "./screens/rentScreen";
import InscriptionScreen from "./screens/inscriptionScreen";
import ConnexionScreen from "./screens/connexionScreen";
import { AppLoading } from "expo";
import { Font } from "expo-font";
import { createAppContainer } from "react-navigation";
import Colors from "./constants/colors";
import DariNavigator from "./navigation/dariNavigator";
import MainScreen from "./screens/mainScreens/mainScreen";

/*const fetchFonts = () => {
  return Font.loadAsync({
    "stc-regular": require("./assets/fonts/STC-Regular.ttf"),
    "stc-bold": require("./assets/fonts/STC-Bold.ttf"),
  });
};*/
export default function App() {
  /*const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }*/
  return <DariNavigator />;
}

const styles = StyleSheet.create({});
