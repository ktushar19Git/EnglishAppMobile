import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import axios from 'axios';

export class SubjectScreen extends Component {
    constructor(props) {
        super(props)
        this.fnFetchdata = this.fnFetchdata.bind(this);
        this.state = {
            Inputdata: []
        }
    }
    componentDidMount() {
        this.fnFetchdata();
    }
    fnFetchdata() {
        axios.get('http://localhost:4000/app/Chapter1')
            .then(response => {
                const data = response.data;
                this.setState({ InputData: data })
                console.log('inside');
                console.log(this.state.InputData);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <FlatList data={this.state.InputData}
                        renderItem={({ item }) => (
                            <View>
                                <Text key={item._id} style={styles.itemHeader}>{item.Subject}</Text>
                                {item.chapters.map((i, v) => (
                                    <View>
                                        <TouchableOpacity
                                            onPress={() => { this.props.navigation.navigate('QuestionScreen') }}>
                                            <Text style={styles.itemDetails}>{i.ChapterName}</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </View>
                        )}
                        keyExtractor={item => item._id} />
                </ScrollView>
            </View>
        )
    }
}

export default SubjectScreen
const styles = StyleSheet.create({
    Container: {
        padding: 10,
        margin: 10,
        backgroundColor: '#088e95',
    },
    Heading: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10,
        backgroundColor: 'orangered',
        width: '100%',
        paddingLeft: 500,
    },
    ListView: {
        margin: 5,

    },
    item: {
        height: 75,
        margin: 5,
        backgroundColor: 'azure',
        borderRadius: 5,
    },
    itemHeader: {
        paddingTop: 10,
        fontSize: 14,
        color: 'black',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    itemDetails: {

        fontSize: 14,
        color: 'green',
        margin: 5,
        paddingBottom: 10,
        marginLeft: 10,
        fontWeight: 'bold',
    },
})