import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Picker,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/colors";
import Header from "../components/Header";
import { CITIES } from "../data/cities";
import { ScrollView } from "react-native-gesture-handler";

const ConnexionScreen = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <ScrollView>
      <Header />
      <View style={styles.screen}>
        <Image
          source={require("../assets/connexion.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          {CITIES.map((item) => {
            return (
              <Picker.Item
                label={item.label}
                value={item.value}
                key={item.value}
              />
            );
          })}
        </Picker>
        <View style={styles.inputContainer}>
          <Text style={styles.labelText}> +216 </Text>
          <TextInput
            style={styles.input}
            placeholder="52 944 970 "
            keyboardType="numeric"
            maxLength={8}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate({
                routeName: "index",
              });
            }}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}> تأكيد </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
ConnexionScreen.navigationOptions = (navigationData) => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,

    alignItems: "center",
  },
  inputContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    marginTop: 20,
    paddingBottom: 10,
    borderColor: Colors.dashed,
  },
  input: {
    height: 50,
    width: "70%",

    fontSize: 24,
    color: Colors.default,

    textAlign: "center",
    fontWeight: "bold",
  },
  labelText: {
    width: "30%",

    fontSize: 24,
    color: Colors.default,

    textAlign: "center",
    fontWeight: "bold",
  },
  image: {
    width: "50%",
  },
  input1: {
    borderColor: "black",
    borderWidth: 2,
  },
  buttonContainer: {
    width: 206,
    marginVertical: 100,
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
  picker: {
    marginTop: -50,
    marginEnd: 20,
    height: 25,
    width: 150,
    color: Colors.default,
  },
});
export default ConnexionScreen;
