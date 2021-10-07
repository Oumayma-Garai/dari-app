import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import SplashScreen from "../screens/splashScreen";
import HomeScreen from "../screens/homeScreen";
import CellScreen from "../screens/cellScreen";
import BuyScreen from "../screens/buyScreen";
import RentScreen from "../screens/rentScreen";
import ConnexionScreen from "../screens/connexionScreen";
import MainScreen from "../screens/mainScreens/mainScreen";
import SellingScreen from "../screens/mainScreens/sellingScreen";
import LocationScreen from "../screens/mainScreens/locationScreen";
import BuyingScreen from "../screens/mainScreens/buyingScreen";
import InscriptionScreen from "../screens/inscriptionScreen";
import Colors from "../constants/colors";
import IconDrawer from "../components/iconDrawer";
import ProfileScreen from "../screens/drawerScreens/profileScreen";
import LanguageScreen from "../screens/drawerScreens/languageScreen";
import FavouriteScreen from "../screens/drawerScreens/favouriteScreen";
import DariDetail from "../screens/mainScreens/dariDetail";
const DrawerNavigator = createDrawerNavigator(
  {
    profile: ProfileScreen,
    language: LanguageScreen,
    favourite: FavouriteScreen,
  },
  {
    initialRouteName: "profile",
    unmountInactiveRoutes: true,
    headerMode: "none",
    contentComponent: (props) => <Sidebar {...props} />,
  }
);

const DariAppNavigator = createMaterialTopTabNavigator(
  {
    buying: {
      screen: BuyingScreen,
      navigationOptions: {
        labelStyle: {
          textAlign: "center",
        },
        tabBarLabel: "شراء ",
      },
    },
    location: {
      screen: LocationScreen,
      navigationOptions: {
        labelStyle: {
          textAlign: "center",
        },
        tabBarLabel: "كراء ",
      },
    },

    sell: {
      screen: SellingScreen,
      navigationOptions: {
        labelStyle: {
          textAlign: "center",
        },
        tabBarLabel: "بيع",
      },
    },
    main: {
      screen: MainScreen,
      navigationOptions: {
        labelStyle: {
          textAlign: "center",
        },
        tabBarLabel: "الرئسية",
      },
    },
  },
  {
    tabBarOptions: {
      inactiveTintColor: "black",
      activeTintColor: "white",
      indicatorStyle: {
        height: null,
        top: 0,
        backgroundColor: Colors.second,
        borderRadius: 30,
      },
      labelStyle: {
        textAlign: "center",
        fontSize: 18,
        padding: 0,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      },
      style: {
        elevation: 0,
        borderRadius: 30,
        height: 55,
        marginVertical: 20,
        marginHorizontal: 10,
        width: "90%",
        alignSelf: "center",
        backgroundColor: "white",

        showLabel: true,
      },
    },
  }
);

/*const dariSectionNavigator = createStackNavigator({
  index: DariAppNavigator,
});*/
const detailNavigator = createStackNavigator({
  detail: {
    screen: DariDetail,
  },
});

const MainNavigator = createStackNavigator({
  main: {
    screen: DariAppNavigator,
  },
 detail: {
    screen: detailNavigator,
  },
  drawer: {
    screen: DrawerNavigator,

    initialRouteName: "drawer",
  },
});

const DariNavigator = createStackNavigator({
  splash: SplashScreen,
  cell: CellScreen,
  buy: BuyScreen,
  rent: RentScreen,
  home: HomeScreen,
  connexion: ConnexionScreen,
  inscription: InscriptionScreen,
  index: {
    screen: MainNavigator,
    navigationOptions: ({ navigation }) => ({
      title: "",
      headerRight: (
        <IconDrawer
          navigationProps={navigation}
          source={require("../assets/icons/menu.png")}
        />
      ),
      headerLeft: (
        <IconDrawer
          navigationProps={navigation}
          source={require("../assets/icons/search.png")}
        />
      ),
      headerStyle: {
        backgroundColor: Colors.background,
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
      headerTintColor: "#fff",
    }),
  },
});

export default createAppContainer(DariNavigator);
