import React, { Component } from 'react'
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NounsPage from './Nouns/Nouns'


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
                <View style={styles.Heading}>Parts of Speech</View>
                
                <View style={styles.ListView}>
                    <FlatList
                        data={[
                            { key: 'Noun', Desc:'Nouns are naming words' },
                            { key: 'Pronoun', Desc:'Pronouns are used to name nouns' },
                            { key: 'Adjective', Desc:'Adjectives descibe nouns/pronouns' },
                            { key: 'Verb', Desc:'Verb is used for actions/state' },
                            { key: 'Adverb', Desc:'Adverbs descibe actions' },
                            { key: 'Conjuction', Desc:'Conjuctions are used to connect sentences or words' },
                            { key: 'Preposition', Desc:'Prepositions are used to tell the position' },
                            { key: 'Interjection', Desc:'Interjections express emotions' },
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
        padding:'10px',
        margin:'10px',
        backgroundColor:'#088e95',
    },
    Heading:{
        color:'white',
        fontSize:'14px',
        fontWeight:'bold',
        justifyContent: 'center',
        alignSelf:'center',
        padding:'10px',
        backgroundColor:'orangered',
        width:'100%',
        paddingLeft:'500px',
    },
    ListView: {
        margin:'5px',
        
      },
    item: {
        height: 75,
        margin:'5px',
        backgroundColor:'azure',
        borderRadius:'5px',
      },
    itemHeader: {
        paddingTop: '10px',
        fontSize: 14,
        color:'black',
        marginLeft:'10px',
        fontWeight:'bold',
      },
      itemDetails: {
        
        fontSize: 14,
        color:'green',
        margin:'5px',
        paddingBottom: '10px',
        marginLeft:'10px',
        fontWeight:'bold',
      },
})