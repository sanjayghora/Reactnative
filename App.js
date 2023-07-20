import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Courses from './src/screens/Courses';
import UserData from './src/screens/UserData';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
} from '@expo-google-fonts/josefin-sans';

import {
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  Nunito_600SemiBold,
  Nunito_700Bold,
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  }

  return (
  <NavigationContainer>
  <Stack.Navigator 
  initialRouteName='Home'>
     {/* Home Screen  */}
    {/* <Stack.Screen name="Home" component={Home} /> */}
    <Stack.Screen 
    name='Home'
    options={{headerShown: false,}}
    >
      {(props) => <Home {...props} chanelName={"sg technical"}/>}
    </Stack.Screen>

    {/* Course Screen */}
    <Stack.Screen  
    name="Courses" 
    component={Courses}
    options={{
      headerTitleStyle:{
        fontSize: 30,
        fontFamily: "JosefinSans_400Regular",
      },
      headerTitle: "Courses",
      headerTitleAlign: "center",
      }}
    />
   
   {/* UserData Screen */}

   <Stack.Screen  name="Student"
    component={UserData}
    options={{
      headerTitleStyle:{
        fontSize: 30,
        fontFamily: "JosefinSans_400Regular",
      },
      headerTitle: "Student",
      headerTitleAlign: "center",
      }}
    />

   {/* About Screen */}
   <Stack.Screen  
   name="About Us"
    component={About}
    options={{
      headerTitleStyle:{
        fontSize: 30,
        fontFamily: "JosefinSans_400Regular",
      },
      headerTitle: "About Us",
      headerTitleAlign: "center",
      }}
    />

   {/* Contact Screen */}
   <Stack.Screen  
   name="Contact" 
   component={Contact}
   options={{
      headerTitleStyle:{
        fontSize: 30,
        fontFamily: "JosefinSans_400Regular",
      },
      headerTitle: "Contact",
      headerTitleAlign: "center",
      }}
   />

  </Stack.Navigator>
  </NavigationContainer>
  );
}

