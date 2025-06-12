import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home() {
  return (
    <LinearGradient
      colors={['#f8cdda', '#d1a1d1']}
      style={styles.container}
      start={{ x:0.1, y:0.1}}
      end={{ x:1, y:1 }}
    >
      <View style = {styles.textContainer}>
        <Text style={styles.statusText}>Mood</Text>
        <Text style={styles.statusText}>Health</Text>
      </View>    
      <View style={styles.statusSection}>
      </View>     
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
    // backgroundColor: '#f8cdda',
  },
  statusSection: {
    backgroundColor: '#E6D7E8',  // Light purple background color
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
  },

  statusText: {
    fontSize: 32,
    color: '#4A4A4A',
    marginBottom: 30,
    fontWeight: '600',
    color: '#000000',
  },

  textContainer: {
    width: '100%',
    paddingLeft: 40,
    paddingBottom: 20,
    alignItems: 'flex-start',
  },

});