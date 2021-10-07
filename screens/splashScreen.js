import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/colors";

/*const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
console.log(windowHeight);
console.log(windowWidth);*/
class SplashScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("home");
    }, 1000);
  }
  render() {
    return (
      <LinearGradient
        colors={[Colors.first, Colors.second, Colors.third]}
        style={styles.LinearGradient}
      >
        <View style={styles.ImageContainer}>
          <Image source={require("../assets/dari.png")} style={styles.Image} />
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  LinearGradient: {
    height: "100%",
  },
  ImageContainer: { flex: 1, alignItems: "center", justifyContent: "center" },
  Image: {
    width: 150,
    height: 116,
  },
});
export default SplashScreen;
