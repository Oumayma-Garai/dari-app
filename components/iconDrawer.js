import React from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class IconDrawer extends React.Component {
  toggleDrawer = () => {
    this.props.navigation.toggleDrawer();
  };
  render() {
    return (
      <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
        <Image
          source={this.props.source}
          style={{ width: 40, height: 25, marginHorizontal: 15 }}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  }
}
export default IconDrawer;
