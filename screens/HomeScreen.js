import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen({navigation}) {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={["#f8cdda", "#d1a1d1"]}
      style={[styles.container, { paddingTop: insets.top }]}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.headerContainer}>
        <Button
          title="Go to home"
          onPress={() => {
            navigation.navigate("Signup");
          }}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: "100%",
    paddingHorizontal: 25,
    alignItems: "flex-start",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#22223B",
    marginBottom: 10,
  },
});
