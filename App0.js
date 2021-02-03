/* eslint-disable react-native/no-inline-styles */
// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import 'react-native-gesture-handler';

import * as React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import FirstPage from './src/screens/FirstPage';
import SecondPage from './src/screens/SecondPage';
import ThirdPage from './src/screens/ThirdPage';
import ProfilePage from './src/screens/ProfilePage';
import LoginPage from './src/screens/LoginPage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={require('./src/assets/images/drawerWhite.png')}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

function profileScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          title: 'Profile Page', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
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

function loginScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{
          title: 'Login Page', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
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

function firstScreenStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: 'First Page', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
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

function secondScreenStack({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: 'Second Page', //Set Header Title
        }}
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{
          title: 'Third Page', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Feed"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={FirstPage}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={SecondPage}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App(props) {
  return (
    <>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </>
  );
}

export default App;
