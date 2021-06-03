import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import NounsPage from './Nouns/Nouns'
import { Avatar } from 'react-native-paper';

import Globalstyles from '../Styles/GlobalStyles'



class Grammar extends Component {

  constructor(props) {
    super(props)
    // this.validate=this.validate.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this)

  }
  handleRedirect = () => {
    alert("Hi");
  }

  render() {
    return (
      <View style={Globalstyles.ContainerMain}>

        <View style={Globalstyles.ContainerInner}>
          <View style={Globalstyles.Horizontal}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('POS')}>
              <View style={Globalstyles.mp10px}>
                <Avatar.Image style={Globalstyles.itemAvatarIcon} size={40} source={require('../../assets/Logo.png')} />
                <Text style={Globalstyles.SubHeading}>Parts of Speech</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={Globalstyles.mp10px}>
              <Avatar.Image style={Globalstyles.itemAvatarIcon} size={40} source={require('../../assets/Logo.png')} />
                <Text style={Globalstyles.SubHeading}>Figure of Speech</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={Globalstyles.ContainerInner_1}>
          <View style={Globalstyles.Horizontal}>
            <TouchableOpacity>
              <View style={Globalstyles.mp10px}>
                <Text style={Globalstyles.SubHeading}>Parts of Speech</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={Globalstyles.mp10px}>
                <Text style={Globalstyles.SubHeading}>Figure of Speech</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>





      </View>
    )
  }
}
export default Grammar
