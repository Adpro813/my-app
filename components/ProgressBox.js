import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressBox() {
  return (
    
    <View style={styles.progressContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.progressHeaderText}>Progress Today</Text>
        <Text style={styles.progressHeaderText}>50%</Text>
      </View>

      {/* Progress bar, above chunk is the progress today and percentage */}
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: '50%' }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 25,
    padding: 20,
    marginBottom: 35,
    marginHorizontal: 20,
    width: '90%',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  progressHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#22223B',
  },
  progressBarContainer: {
    width: '100%',
    height: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 6,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#22223B',
    borderRadius: 6,
  },
}); 