import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/colors";

const RentScreen = (props) => {
  return (
    <LinearGradient
      colors={[Colors.first, Colors.second, Colors.third]}
      style={styles.LinearGradient}
    >
      <View style={styles.mainContainer}>
        <Image
          source={require("../assets/img7.png")}
          style={styles.Image}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}> كراء</Text>

          <Text style={styles.text2} numberOfLines={4}>
            أت فيرو ايوس ايت أكيوساميوس ايت أيوستو أودايو دايجنس بلاندايتاييس
            برايسينتايوم فوليوبتاتيوم ديلينايتاي أتكيوي كورر أت فيرو ايوس ايت
            أكيوساميوس ايت أيوستو أودايو دايجنس سيما يليكيوسيونت ان كيولبا كيواي
            أوفايكيا ديسيريونت مولا
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate({
                routeName: "inscription",
              });
            }}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>تسجيل</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};
RentScreen.navigationOptions = (navigationData) => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
  },
  LinearGradient: { height: "100%" },
  Image: {
    width: "100%",
    backgroundColor: "white",
    height: "33%",
  },
  text: {
    marginTop: 78,
    color: "white",
    fontSize: 37,
    fontWeight: "bold",
    textAlign: "right",
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

  text2: {
    fontSize: 15,
    color: "white",
    textAlign: "right",
    marginTop: 30,
    marginBottom: 80,
    lineHeight: 30,
    alignSelf: "flex-start",
  },
  textContainer: { width: "90%" },
});

export default RentScreen;
