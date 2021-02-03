// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import 'react-native-gesture-handler';

import * as React from 'react';

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home Page' }}/>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Details Page' }} />
      </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' }
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Setting Page' }}/>
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details Page' }}/>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profile Page' }}/>
    </Stack.Navigator>
  );
}


function profileScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          title: 'Profile Page', //Set Header Title
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}


function DetailsScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="Detailspage"
        component={DetailsScreen}
        options={{
          title: 'Details', //Set Header Title
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}  />
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="cogs" color={color} size={size} />
            ),
          }} />

        <Tab.Screen
          name="profileScreenStack"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user" color={color} size={size} />
            ),
          }} />

        <Tab.Screen
          name="DetailsScreenStack"
          component={DetailsScreenStack}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="list" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;