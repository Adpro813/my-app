import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Tasks from './Tasks';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

enableScreens();

const Tab = createBottomTabNavigator();

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
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Tasks" component={Tasks} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}