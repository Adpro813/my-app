import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function TaskScreen() {
  return (
    <LinearGradient
      colors={['#f8cdda', '#d1a1d1']}
      style={styles.container}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
    >
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Today's Tasks</Text>
        <Text style={styles.headerDate}>Monday, June 9</Text>
      </View>

      {/* Progress Section */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressTitle}>Progress Today</Text>
        <View style={styles.progressBox}>
          <Text style={styles.progressText}>50%</Text>
        </View>
      </View>

      <ScrollView>
        {/* Incomplete Task */}
        <View>
          <View>
            <View>{/* Checkbox */}</View>
            <View>
              <Text>Math homework</Text>
              <Text>3:15 - 5:15</Text>
            </View>
            <TouchableOpacity>{/* Delete button */}</TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Text>Upload Video</Text>
          </TouchableOpacity>
        </View>

        {/* Completed Task */}
        <View>
          <View>
            <View>{/* Checkbox */}</View>
            <View>
              <Text>Physics study session</Text>
              <Text>5:30 - 7:15</Text>
            </View>
            <TouchableOpacity>{/* Delete button */}</TouchableOpacity>
          </View>
          <Text>Video uploaded ✓</Text>
        </View>
      </ScrollView>

      {/* Add New Task Button */}
      <TouchableOpacity>
        <Text>Add new task</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  headerContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 25,
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#22223B',
    marginBottom: 10,
  },
  headerDate: {
    fontSize: 16,
    color: '#22223B',
  },
  progressContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    width: '100%',
    paddingHorizontal: 25,
    alignItems: 'flex-start',
  },
  progressTitle: {
    fontSize: 100,
    fontWeight: 'bold',
    color: '#22223B',
  },
  progressBox: {
    marginTop: 10,
  },
  progressText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#22223B',
  },
});