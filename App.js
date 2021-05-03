import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import POS from './Screens/PartsOfSpeech/POS';

import RootStackScreen from './Screens/RootStack/RootStackScreen';
import {createStackNavigator}  from '@react-navigation/stack';

//const Drawer = createDrawerNavigator();
const RootStack=createStackNavigator();




export default function App() {
  return (
    <View style={styles.container}>
      <RootStackScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#009387',
    justifyContent: 'center',
    fontFamily:'Roboto',
    
  },
  
});
