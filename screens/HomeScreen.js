import React from "react";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppScreenTime from "../components/AppScreenTime";
import StatusBar from "../components/StatusBar";

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["#f8cdda", "#d1a1d1"]}
      style={styles.container}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
    >
      {/* 1. Status bar for mood and health */}
      <View style={styles.textContainer}>
        <StatusBar label="Mood" progress={50} />
        <StatusBar label="Health" progress={50} />
      </View>
      
      {/* 2. App screen time section area */}
      <AppScreenTime navigation={navigation} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  textContainer: {
    width: "100%",
    paddingHorizontal: 40,
    paddingBottom: 20,
  },
});
