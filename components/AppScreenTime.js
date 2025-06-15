import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function AppScreenTime({ navigation }) {
  return (
    <View style={styles.statusSection}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  statusSection: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: '100%',
    height: '40%',
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'center',
  },
}); 