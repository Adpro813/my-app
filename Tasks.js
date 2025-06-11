import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert, Modal, TextInput, Platform, LayoutAnimation, UIManager, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';

const initialTasks = [
  {
    id: '1',
    title: 'Math homework',
    time: '3:15 - 5:15',
    completed: false,
    videoUploaded: false,
  },
];

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const { width } = Dimensions.get('window');
const CARD_RADIUS = 22;
const CARD_SHADOW = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.08,
  shadowRadius: 16,
  elevation: 6,
};

function formatTime(date) {
  if (!date) return '';
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutesStr} ${ampm}`;
}

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskStart, setNewTaskStart] = useState(null);
  const [newTaskEnd, setNewTaskEnd] = useState(null);
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);

  // Get current day and date
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayOfWeek = days[now.getDay()];
  const month = months[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();
  const formattedDate = `${dayOfWeek}, ${month} ${day}`;

  const addTask = () => {
    if (!newTaskTitle.trim() || !newTaskStart || !newTaskEnd) return;
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        title: newTaskTitle,
        time: `${formatTime(newTaskStart)} - ${formatTime(newTaskEnd)}`,
        completed: false,
        videoUploaded: false,
      },
    ]);
    setModalVisible(false);
    setNewTaskTitle('');
    setNewTaskStart(null);
    setNewTaskEnd(null);
  };

  const deleteTask = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setTasks(tasks.filter(task => task.id !== id));
  };

  const renderTask = (task) => (
    <View style={[styles.taskCard, CARD_SHADOW]}>
      <View style={styles.taskHeader}>
        <View style={styles.taskTitleRow}>
          {task.completed ? (
            <Ionicons name="checkmark-circle" size={24} color="#22C55E" />
          ) : (
            <Feather name="circle" size={24} color="#7C7C8A" />
          )}
          <Text style={[styles.taskTitle, task.completed && styles.completedText]}>
            {task.title}
          </Text>
        </View>
        <TouchableOpacity onPress={() => deleteTask(task.id)} activeOpacity={0.7} hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}>
          <MaterialIcons name="delete-outline" size={24} color="#F87171" />
        </TouchableOpacity>
      </View>
      <View style={styles.timeRow}>
        <Feather name="clock" size={16} color="#7C7C8A" style={{ marginRight: 4 }} />
        <Text style={[styles.taskTime, task.completed && styles.completedText]}>
          {task.time}
        </Text>
      </View>
      <View style={styles.divider} />
      {task.completed ? (
        <View style={styles.uploadRow}>
          <Feather name="video" size={18} color="#22C55E" />
          <Text style={styles.uploadedText}>Video uploaded ✓</Text>
        </View>
      ) : (
        <TouchableOpacity style={styles.uploadButton} activeOpacity={0.8}>
          <Feather name="upload" size={18} color="#fff" />
          <Text style={styles.uploadButtonText}>Upload Video</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  // Calculate progress
  const progress = tasks.length === 0 ? 0 : Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100);

  return (
    <LinearGradient
      colors={['#f8cdda', '#d1a1d1']}
      style={styles.container}
      start={{ x: 0.1, y: 0.1 }}
      end={{ x: 1, y: 1 }}
    >
      <Text style={styles.header}>Today's Tasks</Text>
      <Text style={styles.date}>{formattedDate}</Text>
      <View style={[styles.progressCard, CARD_SHADOW]}>
        <View style={styles.progressRow}>
          <Text style={styles.progressLabel}>Progress Today</Text>
          <Text style={styles.progressPercent}>{progress}%</Text>
        </View>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
        </View>
      </View>
      <View style={{ flex: 1, width: '100%' }}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => renderTask(item)}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 0 }}
          ListFooterComponent={
            <TouchableOpacity style={[styles.addTaskButton, CARD_SHADOW]} onPress={() => setModalVisible(true)} activeOpacity={0.8}>
              <Feather name="plus" size={20} color="#22223B" />
              <Text style={styles.addTaskText}>Add new task</Text>
            </TouchableOpacity>
          }
        />
      </View>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContentThemed}>
            <View style={styles.modalIconCircle}>
              <Feather name="plus" size={32} color="#f8cdda" />
            </View>
            <Text style={styles.modalTitleThemed}>Add New Task</Text>
            <TextInput
              style={styles.inputNew}
              placeholder="Task Name"
              placeholderTextColor="#b0b0b0"
              value={newTaskTitle}
              onChangeText={setNewTaskTitle}
            />
            <TouchableOpacity
              style={styles.timePickerButton}
              onPress={() => setShowStartPicker(true)}
            >
              <Feather name="clock" size={18} color="#7C7C8A" />
              <Text style={styles.timePickerText}>
                {newTaskStart ? formatTime(newTaskStart) : 'Start Time'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.timePickerButton}
              onPress={() => setShowEndPicker(true)}
            >
              <Feather name="clock" size={18} color="#7C7C8A" />
              <Text style={styles.timePickerText}>
                {newTaskEnd ? formatTime(newTaskEnd) : 'End Time'}
              </Text>
            </TouchableOpacity>
            {showStartPicker && (
              <DateTimePicker
                value={newTaskStart || new Date()}
                mode="time"
                is24Hour={false}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(event, selectedDate) => {
                  setShowStartPicker(Platform.OS === 'ios');
                  if (selectedDate) setNewTaskStart(selectedDate);
                }}
              />
            )}
            {showEndPicker && (
              <DateTimePicker
                value={newTaskEnd || new Date()}
                mode="time"
                is24Hour={false}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                onChange={(event, selectedDate) => {
                  setShowEndPicker(Platform.OS === 'ios');
                  if (selectedDate) setNewTaskEnd(selectedDate);
                }}
              />
            )}
            <View style={styles.modalButtonRow}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)} activeOpacity={0.7}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addButtonThemed} onPress={addTask} activeOpacity={0.8}>
                <Text style={styles.addButtonTextThemed}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width > 400 ? 32 : 16,
    paddingTop: 48,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  header: {
    fontSize: width > 400 ? 30 : 24,
    fontWeight: 'bold',
    color: '#22223B',
    marginBottom: 0,
  },
  date: {
    color: '#7C7C8A',
    marginBottom: 16,
    fontSize: width > 400 ? 18 : 15,
    marginTop: 0,
  },
  progressCard: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: CARD_RADIUS,
    padding: width > 400 ? 24 : 16,
    marginBottom: 32,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressLabel: {
    fontWeight: 'bold',
    fontSize: width > 400 ? 18 : 16,
    color: '#22223B',
  },
  progressPercent: {
    fontWeight: 'bold',
    fontSize: width > 400 ? 20 : 18,
    color: '#22223B',
  },
  progressBarBackground: {
    height: width > 400 ? 20 : 14,
    backgroundColor: '#f3c6d3',
    borderRadius: 8,
    marginTop: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#374151',
    borderRadius: 8,
  },
  taskCard: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: CARD_RADIUS,
    paddingVertical: width > 400 ? 12 : 8,
    paddingHorizontal: width > 400 ? 22 : 14,
    marginBottom: 12,
    paddingBottom: 8,
  },
  divider: {
    height: 1.5,
    backgroundColor: 'rgba(200,200,200,0.45)',
    marginVertical: 8,
    marginLeft: 0,
    marginRight: 0,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskTitle: {
    fontSize: width > 400 ? 20 : 16,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#22223B',
  },
  completedText: {
    color: '#7C7C8A',
    textDecorationLine: 'line-through',
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 32,
    marginTop: 2,
    marginBottom: 8,
  },
  taskTime: {
    color: '#7C7C8A',
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    fontSize: width > 400 ? 16 : 14,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#374151',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    marginLeft: 32,
    marginTop: 4,
    marginBottom: 12,
  },
  uploadButtonText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: width > 400 ? 14 : 12,
  },
  uploadRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 32,
    marginTop: 4,
  },
  uploadedText: {
    color: '#22C55E',
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize: width > 400 ? 16 : 14,
  },
  addTaskButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    borderRadius: CARD_RADIUS,
    padding: width > 400 ? 18 : 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 0,
    backgroundColor: 'transparent',
  },
  addTaskText: {
    color: '#22223B',
    fontSize: width > 400 ? 18 : 16,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContentThemed: {
    backgroundColor: '#f8cdda',
    borderRadius: 32,
    padding: 32,
    width: '88%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 10,
    borderWidth: 1.5,
    borderColor: '#d1a1d1',
    alignItems: 'center',
  },
  modalIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#d1a1d1',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  modalTitleThemed: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#22223B',
    marginBottom: 18,
    textAlign: 'center',
  },
  inputNew: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    fontSize: 16,
    backgroundColor: '#f7f7fa',
    color: '#22223B',
  },
  modalButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    paddingVertical: 12,
    marginRight: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#7C7C8A',
    fontWeight: 'bold',
    fontSize: 16,
  },
  addButtonThemed: {
    flex: 1,
    backgroundColor: '#22223B',
    borderRadius: 12,
    paddingVertical: 14,
    marginLeft: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  addButtonTextThemed: {
    color: '#f8cdda',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },
  timePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f7fa',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 10,
    width: '100%',
  },
  timePickerText: {
    marginLeft: 10,
    color: '#7C7C8A',
    fontSize: 16,
  },
});
