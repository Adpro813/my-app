/**
 * Creates an input field, with a placeholder, width, secureTextEntry, value, onChangeText, and any additional props.
 * Does some basic styling like background color, border radius, padding, font size, and color.
 * The actual size of each input field is determined by the width prop passed from SignupForm.js.
 */
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default function FormInput({ 
  placeholder, 
  width = '100%',
  secureTextEntry = false,
  value,
  onChangeText,
  ...props // Collects any additional props not listed above
}) {
  return (
    <View style={[styles.inputWrapper, { width }]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#666"
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        {...props} // Spreads additional props onto TextInput
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    color: "#333",
  },
}); 