import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text, Platform, StatusBar as RNStatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function LoadingScreen({ navigation }) {  //navigation prop passed down from Stack Screen, allows us to navigate between the stacks (see @App.js)
  // when the loading screen mounts (is on the screen) start a timer that replaces the loading screen with the home screen after 2 seconds
  //use useEffect because we only want this timer to run once. useEffect runs the code inside of it when the dependencies change. Since there are no dependencies, it will only run once (what we want).
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      navigation.navigate('Signup');
    }, 2000); // Navigate after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <LinearGradient // have to wrap the entire component in linear gradient to get background color linear gradient
      colors={["#f8cdda", "#d1a1d1"]}
      style={styles.loadingContainer}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
    >
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <View style={styles.centerContent}>
        <Image
          source={require("../images/logo.png")}
          style={styles.logoImage}
        />
        <Text style={styles.loadingText}>MyPetPal</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 44,
    justifyContent: "center",
    alignItems: "center",
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImage: {
    width: 200,
    height: 200,
  },
  loadingText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    marginTop: 20,
  },
});
