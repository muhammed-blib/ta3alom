import React from "react";
import { Menu, Divider, NativeBaseProvider } from "native-base";
import { Pressable } from "react-native";
import DropDownProfile from "./DropDownProfile.js";
export class DropDownNotification extends React.Component {
  state = {
    showResults: true,
  };

  render() {
    return (
      <Menu
        style={{ backgroundColor: "#E2E8F0" }}
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <img
                onClick={hide}
                width={30}
                height={30}
                className="after-log-img"
                src={require("../../assets/noti.png")}
                alt="notifications"
              ></img>
            </Pressable>
          );
        }}
      >
        <Menu.Item>Notifications</Menu.Item>
      </Menu>
    );
  }
}

export default () => {
  return (
    <NativeBaseProvider>
      <DropDownNotification />
    </NativeBaseProvider>
  );
};
