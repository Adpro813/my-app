import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function TaskItem({ title, time, isCompleted, hasVideo, onDelete }) {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.rowCenter}>

        {/* Checkbox */}
        <View style={styles.checkbox} />

        {/* Task info */}
        <View style={styles.taskInfo}>
          <Text style={styles.taskTitle}>{title}</Text>
          <View style={styles.rowCenter}>
            <Feather name="clock" size={14} />
            <Text style={styles.taskTime}>{time}</Text>
          </View>
        </View>

        {/* Delete button */}
        <TouchableOpacity onPress={onDelete}> {/* onPress is a prop that is passed down from the TaskScreen component */}
          <Feather name="trash-2" size={16} color="#FF3B30" />
        </TouchableOpacity>
      </View>

      {/* Line */}
      <View style={styles.line}></View>

      {/* Video button box */}
      <View style={styles.videoContainer}>
        {hasVideo && (
          <TouchableOpacity>
            <View style={styles.rowCenter}>
              <Feather name="upload" size={14} color="#FFFFFF" />
              <Text style={styles.videoText}>
                {isCompleted ? 'Video uploaded ✓' : 'Upload Video'}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 15,
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 15,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#22223B',
    marginRight: 15,
  },
  taskInfo: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#22223B',
    marginBottom: 4,
  },
  taskTime: {
    marginLeft: 5,
    fontSize: 14,
    color: '#666666',
  },
  line: {
    height: 0.5,
    backgroundColor: 'rgba(34, 34, 59, 0.2)',
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 5,
  },
  videoContainer: {
    backgroundColor: '#000000',
    borderRadius: 8,
    padding: 8,
    alignSelf: 'flex-start',
    marginLeft: 39,
    marginTop: 10,
  },
  videoText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  videoButton: {
    marginTop: 0,
    paddingLeft: 0,
  },
  videoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}); 