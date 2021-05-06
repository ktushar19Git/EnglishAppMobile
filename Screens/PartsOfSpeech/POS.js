import React, { Component } from 'react'
import { StyleSheet, Text, View,FlatList,TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NounsPage from './Nouns/Nouns'
import { Avatar } from 'react-native-paper';



class POS extends Component{

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
                
                
                
                <View style={styles.ListView}>
                    <FlatList
                        data={[
                            { key: 'Noun', Desc:'Nouns are naming words',Link:'Nouns' },
                            { key: 'Pronoun', Desc:'Pronouns are used to name nouns',Link:'Pronouns' },
                            { key: 'Adjective', Desc:'Adjectives descibe nouns/pronouns',Link:'Adjectives' },
                            { key: 'Verb', Desc:'Verb is used for actions/state' },
                            { key: 'Adverb', Desc:'Adverbs descibe actions' },
                            { key: 'Conjuction', Desc:'Conjuctions are used to connect sentences or words' },
                            { key: 'Preposition', Desc:'Prepositions are used to tell the position' },
                            { key: 'Interjection', Desc:'Interjections express emotions' },
                        ]}
                        renderItem={({ item }) => 
                        <View style={styles.item} >
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate(item.Link)}>
                                <View style={styles.itemRow}>
                                    <View style={styles.itemAvatarColumn}>
                                        <Avatar.Image style={styles.itemAvatarIcon} size={40} source={require('../../assets/Logo.png')} />
                                        
                                    </View>
                                    <View style={styles.itemLabelColumn}>
                                        <Text style={styles.itemHeader}>{item.key}</Text>
                                        <Text style={styles.itemDetails}>{item.Desc}</Text>
                                    </View>        
                                    <View style={styles.itemNextColumn}>
                                        <MaterialIcons
                                        name="navigate-next"
                                        color="black"
                                        size={40} />        
                                    </View>

                                </View>
                                
                                
                            </TouchableOpacity>
                        </View>
                        
                        
                        }
                        />
                    </View> 
            </View>
        )
    }
}
export default POS
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
      itemRow: {
        flex:1,
        flexDirection:'row'
      },
      itemAvatarColumn: {
        flex:1,
        flexDirection:'row',
        textAlign:'center',
        alignContent:'center',
        color:'purple',
        alignSelf:'center'
        
      },
      itemLabelColumn: {
        flex:12,
        flexDirection:'column'
      },
      itemNextColumn: {
        flex:1,
        flexDirection:'row',
        textAlign:'right',
        color:'black',
        alignSelf:'center'
      },
      itemAvatarIcon: {
        color:'purple',
        marginLeft:20
        
      },
      itemColumn: {
     
        flexDirection:'column'
      },

})