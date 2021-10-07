import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Header";
import Colors from "../constants/colors";

const InscriptionScreen = (props) => {
  const [numberPhone, setNumberPhone] = useState("");

  return (
    <View style={styles.screen}>
      <Header />

      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          props.navigation.pop();
        }}
      >
        <AntDesign name="left" size={40} color={Colors.second} />
      </TouchableOpacity>
      <View style={styles.mainContainer}>
        <TextInput
          placeholder="+ 216 52 944 970 "
          style={styles.input1}
          keyboardType="numeric"
          placeholderTextColor={Colors.default}
          onChangeText={(text) => {
            setNumberPhone(text);
          }}
        />

        <View style={styles.codeContainer}>
          <TextInput
            keyboardType="numeric"
            style={styles.input2}
            maxLength={1}
          />
          <TextInput
            keyboardType="numeric"
            style={styles.input2}
            maxLength={1}
          />
          <TextInput
            keyboardType="numeric"
            style={styles.input2}
            maxLength={1}
          />
          <TextInput
            keyboardType="numeric"
            style={styles.input2}
            maxLength={1}
          />
        </View>

        <View style={styles.textContainer} numberOfLines={2}>
          <Text style={styles.text}> أرسلنا لك رمز للتحقق من الرقم </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate({
                routeName: "connexion",
              });
            }}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}> تأكيد </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
InscriptionScreen.navigationOptions = (navigationData) => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  iconContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },

  input1: {
    height: 50,
    width: "70%",
    marginVertical: 20,
    fontSize: 24,
    color: Colors.default,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input2: {
    height: 50,
    fontSize: 25,
    width: 30,
    textAlign: "center",
    color: Colors.second,
    borderBottomWidth: 3,
    borderColor: Colors.dashed,
    marginTop: 20,
    marginBottom: 50,
    marginHorizontal: 10,
    fontWeight: "bold",
    paddingBottom: 8,
  },
  text: {
    fontSize: 24,
    textAlign: "center",

    lineHeight: 29,
    letterSpacing: 0,
    color: "black",
  },
  textContainer: {
    width: 200,
    maxWidth: "40%",
    alignItems: "center",
    justifyContent: "center",
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
});
export default InscriptionScreen;
