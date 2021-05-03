import React, { Component } from 'react'
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import NounsPage from './Nouns/Nouns'


class Vocabulary extends Component{

    constructor(props) {
        super(props)
        // this.validate=this.validate.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this)
        
    }
    handleRedirect = () => {
        alert("Hi");
    }

    render()
    {
        return(
            <View style={styles.Container}>
                <View style={styles.Heading}><Text>Vocabulary</Text></View>
                
                <View style={styles.ListView}>
                    <FlatList
                        data={[
                            { key: 'Hospital', Desc:'Learn how to use words in Hospitals' },
                            { key: 'School', Desc:'School related words' },
                            { key: 'Travel', Desc:'Travel Disctionary' },
                            { key: 'Education', Desc:'Education Hub' },
                            { key: 'House', Desc:'Words used in the house' },
                            { key: 'Relationships', Desc:'How to descibe relationships' },
                            { key: 'Business', Desc:'Business Words' },
                            { key: 'Grocery', Desc:'Learn how to shop' },
                        ]}
                        renderItem={({ item }) => 
                        <View style={styles.item} onPress={() => { this.handleRedirect() }}>
                            <TouchableOpacity onPress={()=>navigation.navigate('Nouns')}>
                            <Text style={styles.itemHeader}>{item.key}</Text>
                            <Text style={styles.itemDetails}>{item.Desc}</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color="#fff"
                                size={40} />
                                </TouchableOpacity>
                        </View>
                        
                        
                        }
                        />
                    </View> 
            </View>
        )
    }
}
export default Vocabulary
const styles = StyleSheet.create({
    Container:{
        padding:10,
        margin:10,
        backgroundColor:'#088e95',
    },
    Heading:{
        color:'white',
        fontSize:14,
        fontWeight:'bold',
        justifyContent: 'center',
        alignSelf:'center',
        padding:10,
        backgroundColor:'orangered',
        width:'100%',
        paddingLeft:500,
    },
    ListView: {
        margin:5,
        
      },
    item: {
        height: 75,
        margin:5,
        backgroundColor:'azure',
        borderRadius:5,
      },
    itemHeader: {
        paddingTop: 10,
        fontSize: 14,
        color:'black',
        marginLeft:10,
        fontWeight:'bold',
      },
      itemDetails: {
        
        fontSize: 14,
        color:'green',
        margin:5,
        paddingBottom: 10,
        marginLeft:10,
        fontWeight:'bold',
      },
})