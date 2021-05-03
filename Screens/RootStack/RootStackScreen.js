import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import SplashScreen  from './SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from './SignupScreen';
import SigninScreen from './SigninScreen';
import Drawerscreen from './Drawerscreen';
import POS from '../PartsOfSpeech/POS'
import MainTabScreen from '../Maintabscreen'



const RootStack= createStackNavigator();

const RootStackScreen=({ navigation}) =>(
    <NavigationContainer>
    <RootStack.Navigator headerMode='none'>
    <RootStack.Screen name="MainTabScreen"  component={MainTabScreen} />
     <RootStack.Screen name="SplashScreen"  component={SplashScreen} />
     <RootStack.Screen name="SigninScreen" component={SigninScreen} />
     <RootStack.Screen name="SignupScreen"  component={SignupScreen}  />
    <RootStack.Screen name="Drawerscreen"   component={Drawerscreen}  />
    <RootStack.Screen name="POS"  component={POS} />
    </RootStack.Navigator>
    </NavigationContainer>
);

export default RootStackScreen;

