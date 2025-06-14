import React from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SignupForm from "../components/SignupForm";

export default function SignupScreen({navigation}) {
  return (
    <LinearGradient
      colors={["#f8cdda", "#d1a1d1"]}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
      style={styles.signUpContainer}
    >
        {/* 1. Top Section */}
        <View style={styles.headerSection}>
          <Image
            source={require("../images/logo.png")}
            style={styles.userIcon}
          />
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>
            Join us to start tracking your progress
          </Text>
        </View>

        {/* 2. Form Section */}
        <SignupForm />

        {/* 3. Google Signup Button and Terms & Conditions */}
        <View style={styles.googleButtonSection}>
          <Button title="Go to home" onPress={() => {
            navigation.navigate("MainApp");
          }} />
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  signUpContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: 50,
  },
  headerSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#000",
  },
  userIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  googleButtonSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
