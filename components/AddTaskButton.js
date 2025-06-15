import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function AddTaskButton() {
  return (
    <View style={styles.addButtonContainer}>  
      <TouchableOpacity style={styles.addButton}>
        <Feather name="plus" size={24} color="#000000" />
        <Text style={styles.addButtonText}>Add new task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  addButtonContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: 350,
    justifyContent: 'center',
    borderRadius: 150,
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: '#FFFFFF'
  },
  addButtonText: {
    color: '#000000',
    marginLeft: 8,
    fontSize: 16,
  },
}); 