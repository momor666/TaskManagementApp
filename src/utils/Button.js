import React from "react";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Button } from "react-native-elements";

export default function CustomButton(props) {
  const { title, testID, onPress, disabled, style, icon } = props;

  return (
    <Button
      titleProps={{ fontFamily: "Lato-Light" }}
      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: ["#53F539", "#33ED30"],
        start: { x: 0.5, y: 0.5 }
      }}
      buttonStyle={[styles.buttonStyle, style]}
      disabledStyle={styles.buttonStyle}
      icon={icon}
      title={title}
      testID={testID}
      onPress={onPress}
      disabled={disabled}
    />
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 20,
    elevation: 3,
    width: 330,
    paddingTop: 3,
    paddingBottom: 3
  }
});
