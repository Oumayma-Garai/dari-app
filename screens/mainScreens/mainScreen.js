import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Villas } from "../../data/dummy-data";

const MainScreen = (props) => {
  const VillasType1 = Villas.filter((item, i) => i < 3);
  const VillasType2 = Villas.filter((item, i) => i > 2);
  const column1Data = VillasType2.filter((item, i) => i % 2 === 0);
  const column2Data = VillasType2.filter((item, i) => i % 2 === 1);
  return (
    <View style={styles.screen}>
      <ScrollView horizontal={true} style={{ flexGrow: 0.03 }}>
        {VillasType1.map((item) => {
          return (
            <View style={styles.itemType1} key={item.id}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate({
                    routeName: "detail",
                    params: {
                      dariId: item.id,
                    },
                  });
                }}
              >
                <Image source={item.imageUrl} />
              </TouchableOpacity>
              <Text> {item.price}</Text>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.container}>
        <View style={styles.column}>
          <FlatList
            data={column1Data}
            renderItem={({ item }) => (
              <View style={styles.item} key={item.id}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate({
                      routeName: "detail",
                      params: {
                        dariId: item.id,
                      },
                    });
                  }}
                >
                  <Image source={item.imageUrl} />
                </TouchableOpacity>
                <Text> {item.price} </Text>
              </View>
            )}
          />
        </View>

        <View style={styles.column}>
          <FlatList
            data={column2Data}
            renderItem={({ item }) => (
              <View style={styles.item} key={item.id}>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate({
                      routeName: "detail",
                      params: {
                        dariId: item.id,
                      },
                    });
                  }}
                >
                  <Image source={item.imageUrl} />
                </TouchableOpacity>
                <Text> {item.price}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemType1: {
    marginHorizontal: 15,
    marginBottom: 0,
    paddingBottom: 0,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    height: 100,
    width: "87%",
    alignSelf: "center",
  },
  column: {
    flex: 1,
    flexDirection: "column",
  },

  item: {
    flex: 1,
  },
});
export default MainScreen;
