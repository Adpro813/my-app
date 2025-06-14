import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FormInput from './FormInput';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev, // keeps all the previous values of the formData object the same 
      [field]: value // updates the value of the field with the new value 
    }));
  };

  return (
    <View style={styles.formSection}>
      <View style={styles.nameSection}>
        <FormInput
          placeholder="First Name"
          width="48%"
          value={formData.firstName}
          onChangeText={(value) => handleChange('firstName', value)}
        />
        <FormInput
          placeholder="Last Name"
          width="48%"
          value={formData.lastName}
          onChangeText={(value) => handleChange('lastName', value)}
        />
      </View>
      
      <FormInput
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
        value={formData.email}
        onChangeText={(value) => handleChange('email', value)}
      />
      
      <FormInput
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={(value) => handleChange('password', value)}
      />
      
      <FormInput
        placeholder="Confirm Password"
        secureTextEntry
        value={formData.confirmPassword}
        onChangeText={(value) => handleChange('confirmPassword', value)}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  formSection: {
    flex: 2,
    backgroundColor: "rgba(245, 224, 229, 0.9)",
    width: "90%",
    borderRadius: 25,
    padding: 20,
  },
  nameSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
}); 