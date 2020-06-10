import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import ChatScreen from './Screens/ChatScreen';
import ProfileScreen from './Screens/ProfileScreen';
import SettingScreen from './Screens/SettingScreen';
import AnimatedTabBar from './components/AnimatedTabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    // tabBarOptions={{
    //   activeTintColor: '#e74c3c',
    // }}
    tabBar={props => <AnimatedTabBar {...props} activeColor="#e74c3c" />}>
    <Tab.Screen
      options={{iconName: 'home', title: 'Home'}}
      name="Home"
      component={HomeScreen}
    />
    <Tab.Screen
      name="Chat"
      options={{iconName: 'chat', title: 'Home'}}
      component={ChatScreen}
    />
    <Tab.Screen
      name="Profile"
      options={{iconName: 'person', title: 'Home'}}
      component={ProfileScreen}
    />
    <Tab.Screen
      name="Setting"
      options={{iconName: 'settings', title: 'Home'}}
      component={SettingScreen}
    />
  </Tab.Navigator>
);

const App = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);

export default App;
