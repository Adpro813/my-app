import React, { useState } from 'react'; 
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProgressBox from '../components/ProgressBox';
import TaskItem from '../components/TaskItem';
import AddTaskButton from '../components/AddTaskButton';

export default function TaskScreen() {
  // Added tasks state management
  // This array holds all our tasks and can be updated using setTasks
  // Each task has an id, title, time, and other properties
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: "Math homework",
      time: "3:15 - 5:15",
      hasVideo: true,
      isCompleted: false,
    }
  ]);

  // Added delete functionality
  // This function filters out the task with the matching taskId
  // currentTasks => ... syntax ensures we're using the latest state
  const handleDeleteTask = (taskId) => {
    setTasks(currentTasks => currentTasks.filter(task => task.id !== taskId));
  };

  return (
    <LinearGradient
      colors={['#f8cdda', '#d1a1d1']}
      style={styles.container}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
    >
      {/* Header date and time */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Today's Tasks</Text>
        <Text style={styles.headerDate}>Monday, June 9</Text>
      </View>

      {/* Progress box */}
      <ProgressBox />

      {/* Task list - Updated to map over tasks array */}
      <ScrollView style={styles.scrollView}>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            title={task.title} 
            time={task.time}
            hasVideo={task.hasVideo}
            isCompleted={task.isCompleted}
            onDelete={() => handleDeleteTask(task.id)}  // Added delete handler
          />
        ))}
      </ScrollView>

      {/* Add New Task Button */}
      <AddTaskButton />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 20,
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: 25,
    marginBottom: 20,
    marginTop: 25,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#22223B',
  },
  headerDate: {
    fontSize: 16,
    color: '#22223B',
  },
  scrollView: {
    width: '100%',
    flexGrow: 0,
  },
});