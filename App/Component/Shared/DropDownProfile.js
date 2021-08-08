import React from "react";
import { Menu, Divider, NativeBaseProvider } from "native-base";
import { Pressable } from "react-native";
import colors from "../../config/colors.js";
import { AntDesign } from "@expo/vector-icons";
export class DropDownProfile extends React.Component {
 
  render() {
  
      return (
        <Menu
          style={{ backgroundColor: "#E2E8F0" }}
          trigger={(triggerProps) => {
            return (
              <Pressable
                accessibilityLabel="More options menu"
                {...triggerProps}
              >
                <img
                  width={30}
                  height={30}
                  className="after-log-img"
                  src={require("../../assets/profile.png")}
                  alt="profile"
                ></img>
              </Pressable>
            );
          }}
        >
          <Menu.Item>profile</Menu.Item>
          <Menu.Item>Dashboard</Menu.Item>
          <Divider
            style={{ height: 0.3, backgroundColor: colors.linksColor }}
          />
          <Menu.Item
            style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            onClick={this.props.logout}
          >
            <p style={{ marginRight: 10 }}>Logout</p>
            <AntDesign name="logout" size={24} color="black" />
          </Menu.Item>
        </Menu>
      );
    }
  }

export default () => {
  return (
    <NativeBaseProvider>
      <DropDownProfile />
    </NativeBaseProvider>
  );
};
