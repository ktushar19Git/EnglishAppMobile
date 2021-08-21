import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import SplashScreen  from './SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from './SignupScreen';
import SigninScreen from './SigninScreen';
import Drawerscreen from './Drawerscreen';
import POS from '../PartsOfSpeech/POS'
import MainTabScreen from '../Maintabscreen'
import Nouns from '../PartsOfSpeech/Nouns/Nouns';
import Pronouns from '../PartsOfSpeech/Pronouns/Pronouns';
import Adjectives from '../PartsOfSpeech/Adjectives/Adjectives';
import QuestionScreen from '../Questions/QuestionScreen';



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
    <RootStack.Screen name="Nouns"  component={Nouns} />
    <RootStack.Screen name="Pronouns"  component={Pronouns} />
    <RootStack.Screen name="Adjectives"  component={Adjectives} />
    <RootStack.Screen name="QuestionScreen"component={QuestionScreen}/>
    </RootStack.Navigator>
    </NavigationContainer>
);

export default RootStackScreen;

