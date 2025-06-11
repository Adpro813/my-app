import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LoadingScreen({ navigation }) {  //navigation prop passed down from Stack Screen, allows us to navigate between the stacks (see @App.js)
  // when the loading screen mounts (is on the screen) start a timer that replaces the loading screen with the home screen after 2 seconds
  //use useEffect because we only want this timer to run once. useEffect runs the code inside of it when the dependencies change. Since there are no dependencies, it will only run once (what we want).
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 2000); // set time out has two parameters: the function to run and the time to run it for
  }, []); //the empty array is the dependency array. It tells useEffect to only run once. if there was like a boolean there, the code inside this useEffect would run every time the boolean changed.
  return (
    <LinearGradient // have to wrap the entire component in linear gradient to get background color linear gradient
      colors={["#f8cdda", "#d1a1d1"]}
      style={styles.loadingContainer}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.loadingContainer}>
        <Image
          source={require("../images/logo.png")}
          style={styles.logoImage}
        />
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", //put logo in center
  },
  logoImage: {
    width: 100,
    height: 100,
  },
});
