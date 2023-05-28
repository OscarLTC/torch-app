import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const torchOffImage = require("./assets/torch_off.jpg");
const torchOnImage = require("./assets/torch_on.jpg");

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const onScreenClick = () => {
    setIsOn(!isOn);
  };

  const src = isOn ? torchOnImage : torchOffImage;
  return (
    <View style={[styles.container]}>
      <Image source={src} />
      <TouchableOpacity style={styles.button} onPress={onScreenClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  button: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
});
