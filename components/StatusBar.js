import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatusBar({ label, progress }) {
  return (
    <View style={styles.statusRow}>
      <Text style={styles.statusText}>{label}</Text>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  statusText: {
    fontSize: 32,
    fontWeight: "600",
    color: "#000000",
    width: 120,
  },
  progressBarContainer: {
    flex: 1,
    height: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 6,
    marginLeft: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#22223B',
    borderRadius: 6,
  },
}); 