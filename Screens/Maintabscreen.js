import React from 'react';


import { MaterialCommunityIcons} from 'react-native-vector-icons';
import Homestack from './Homestack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import AboutScreen from './AboutScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {MaterialIcons} from '@expo/vector-icons';
import { createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import TabScreen5 from '../Tabs/TabScreen5';
import ContactsScreen from '../Screens/Drawer/ContactsScreen';
import Submitdata from '../Screens/RootStack/Submitdata';
import POS from '../Screens/PartsOfSpeech/POS'
import Vocabulary from '../Screens/Vocabulary/Vocabulary';
import Grammar from './Grammar/Grammar';
import VideoScreen  from '../Videos/VideoScreen';
import QuestionScreen from '../Screens/Questions/QuestionScreen';
import SubjectScreen from '../Screens/Questions/SubjectScreen';


const HomeStack = createStackNavigator();
const DetailsStack=createStackNavigator();
const AboutStack=createStackNavigator();
const ContactStack=createStackNavigator();
const VideoStack=createStackNavigator();
const QuestionStack=createStackNavigator();
const Tab=createMaterialBottomTabNavigator();
const Drawer=createDrawerNavigator();

const Maintabscreen = () => (
    <Tab.Navigator 
    initialRouteName="Grammer"
    tabBarOptions={{
        style:{
            backgroundColor:'green'
        }
    }}>
    

   <Tab.Screen
   name="Grammer"
   component={HomeStackScreen}
   options={{
       tabBarLabel:'Grammer',
       tabBarColor:"#fff",
       backgroundColor:'black',
       tabBarIcon:() =>(
           <Icon name="ios-home"  size={26}  />
       ),
       
       

   }}
   />

<Tab.Screen
   name="Vocabulary"
   component={DetailsStackScreen}
   options={{
       tabBarLabel:'Vocabulary',
       tabBarColor:"#fff",
       tabBarIcon:() =>(
           <Icon name="ios-notifications"  size={26} />
       ),
       

   }}
   />

<Tab.Screen
   name="Exams"
   component={AboutStackScreen}
   options={{
       tabBarLabel:'Exams',
       tabBarColor:"#fff",
       tabBarIcon:() =>(
           <Icon name="ios-person"  size={26} />                                           
       ),
       

   }}
   /> 

<Tab.Screen
   name="Profile"
   component={ContactStackScreen}
   options={{
       tabBarLabel:'Profile',
       tabBarColor:"#fff",
       tabBarIcon:() =>(
           <Icon name="ios-call"  size={26} />
       ),
       

   }}
   />

<Tab.Screen
   name="Video"
   component={VideoStackScreen}
   options={{
       tabBarLabel:'Video',
       tabBarColor:"#fff",
       tabBarIcon:() =>(
           <MaterialIcons name="video-library"  size={26} />
       ),
       

   }}
   />

<Tab.Screen
   name="Subject"
   component={QuestionStackScreen}
   options={{
       tabBarLabel:'Subject',
       tabBarColor:"#fff",
       tabBarIcon:() =>(
           <MaterialIcons name="question-answer"  size={26} />
       ),
   }}
   />

    </Tab.Navigator>
);
export default Maintabscreen;



const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387'
        },
        headerTintColor:'black',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <HomeStack.Screen name="Grammar" component={Grammar} options={{
            title:'Grammar',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor='#009387' />
            )
           
        }} />
    </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) =>(
    <DetailsStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387'
        },
        headerTintColor:'black',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <DetailsStack.Screen name="Vocabulary" component={Vocabulary} options={{
            title:'Vocabulary',
            headerLeft:()=>(
                <Icon.Button name="ios-notifications" size={25} backgroundColor='#009387' />
            )
           
        }} />
    </DetailsStack.Navigator>
);

const AboutStackScreen = ({navigation}) =>(
    <AboutStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <AboutStack.Screen name="About" component={AboutScreen} options={{
            title:'About',
            headerLeft:()=>(
                <Icon.Button name="ios-person" size={25} backgroundColor='#009387' />
            )
           
        }} />
    </AboutStack.Navigator>
);


const ContactStackScreen = ({navigation}) =>(
    <ContactStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <ContactStack.Screen name="Contact" component={ContactsScreen} options={{
            title:'Contact',
            headerLeft:()=>(
                <Icon.Button name="ios-call" size={25} backgroundColor='#009387' />
            )
           
        }} />
    </ContactStack.Navigator>
);

const VideoStackScreen = ({navigation}) =>(
    <VideoStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <VideoStack.Screen name="Contact" component={VideoScreen} options={{
            title:'Video',
            headerLeft:()=>(
                <Icon.Button name="ios-menu" size={25} backgroundColor='#009387' />
            )
           
        }} />
    </VideoStack.Navigator>
);

const QuestionStackScreen = ({navigation}) =>(
    <QuestionStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <QuestionStack.Screen name="Subject" component={SubjectScreen} options={{
            title:'Subject',
            headerLeft:()=>(
                <Icon.Button name="ios-menu" size={25} backgroundColor='#009387' />
            )
           
        }} />
    </QuestionStack.Navigator>
);

