import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TaskScreen from '../screens/TaskScreen';
import LoadingScreen from '../screens/LoadingScreen';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontWeight: 'bold',
          fontSize: 13,
          marginBottom: 6,
          marginTop: 0,
          textAlign: 'center',
        },
        tabBarIconStyle: {
          marginTop: 6,
          marginBottom: -2,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarStyle: {
          backgroundColor: 'rgba(248,205,218,0.95)',
          height: 48 + insets.bottom,
          paddingBottom: insets.bottom,
          borderTopWidth: 0,
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarActiveTintColor: '#22223B',
        tabBarInactiveTintColor: '#7C7C8A',
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Home') {
            return <Feather name="home" size={size} color={color} />;
          }
          if (route.name === 'Tasks') {
            return <MaterialCommunityIcons name="clipboard-list-outline" size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tasks" component={TaskScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs; 