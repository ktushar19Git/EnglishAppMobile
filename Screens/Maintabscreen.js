import React from 'react';


import { MaterialCommunityIcons} from 'react-native-vector-icons';
import Homestack from './Homestack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import AboutScreen from './AboutScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator} from '@react-navigation/stack';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import TabScreen5 from '../Tabs/TabScreen5';
import ContactsScreen from '../Screens/Drawer/ContactsScreen';
import Submitdata from '../Screens/RootStack/Submitdata';
import POS from '../Screens/PartsOfSpeech/POS'
import Vocabulary from '../Screens/Vocabulary/Vocabulary';


const HomeStack = createStackNavigator();
const DetailsStack=createStackNavigator();
const AboutStack=createStackNavigator();
const ContactStack=createStackNavigator();
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
           <Icon name="ios-home"  size={26} />
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



    </Tab.Navigator>
);
export default Maintabscreen;



const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#009387'
        },
        headerTintColor:'red',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <HomeStack.Screen name="POS" component={POS} options={{
            title:'Overview',
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
        headerTintColor:'blue',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }}>
        <DetailsStack.Screen name="Vocabulary" component={Vocabulary} options={{
            title:'Details',
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
