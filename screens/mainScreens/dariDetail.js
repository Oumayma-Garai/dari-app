import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Villas } from "../../data/dummy-data";
import DetailModel from "../../components/detailModel";
const DariDetail = (props) => {
  const dariId = props.navigation.getParam("dariId");
  const selectedDari = Villas.find((villa) => villa.id === dariId);
  return (
    <DetailModel
      image={selectedDari.imageUrlMx}
      price={selectedDari.price}
      location={selectedDari.location}
      type={selectedDari.type}
      numroom={selectedDari.numroom}
      numbath={selectedDari.numbath}
      numkitchen={selectedDari.numkitchen}
      numliving={selectedDari.numliving}
      numgarden={selectedDari.numgarden}
      numparking={selectedDari.numparking}
    />
  );
};
DariDetail.navigationOptions = (navigationData) => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({});
export default DariDetail;
