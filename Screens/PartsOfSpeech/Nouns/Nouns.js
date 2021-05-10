import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Avatar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';




class Nouns extends Component {

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
      <View style={styles.ContainerMain}>

        <LinearGradient colors={['#C02425', '#F0CB35']} style={styles.ContainerTitleLG}>
          <View style={styles.ContainerTitle}>
            <View style={styles.ContainerTitleBackButton}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
                <MaterialIcons
                  name="navigate-before"
                  color="black"
                  size={40} />
              </TouchableOpacity>
            </View>
            <View style={styles.ContainerTitleHeading}>
              <Text style={styles.TitleHeading}>Nouns</Text>
            </View>
          </View>
        </LinearGradient>

        <ScrollView>

          <LinearGradient colors={['#2193b0', '#6dd5ed']} style={styles.ContainerVIPLG}>
            <View style={styles.ContainerVIP}>
              <Text style={styles.MainHeading}>What are Nouns?</Text>
              <Text style={styles.MainDesc}>Nouns are naming words used to name a place, person, animal and thing. </Text>
            </View>
          </LinearGradient>

          <LinearGradient colors={['#FFEFBA', '#FFFFFF']} style={styles.ContainerVIPLG}>

            <View style={styles.ContainerContents}>
              <Text style={styles.MainHeading}>Examples of Nouns</Text>

              <View style={styles.ContainerListOuter} >
                <View style={styles.ContainerListOuter, styles.backgroundColorBlue}>
                  <View style={styles.ContainerListHeader}>
                    <MaterialIcons
                      name="navigate-next"
                      color="white"
                      size={40} />
                    <Text style={styles.NormalHeading}>Person</Text>
                  </View>

                  <View style={styles.ListView}>
                    <FlatList numColumns={2}
                      data={[
                        { key: 'Tushar', Desc: 'Nouns are naming words' },
                        { key: 'Tanaya', Desc: 'Pronouns are used to name nouns' },
                        { key: 'Piyush', Desc: 'Adjectives descibe nouns/pronouns' },
                      ]}
                      renderItem={({ item }) =>
                        <View>
                          <View style={styles.ContainerHorizontal}>
                            <View>
                              <MaterialIcons
                                name="info"
                                color="black"
                                size={25} />
                            </View>
                            <View>
                              <Text style={styles.NormalText}>{item.key}</Text>
                            </View>
                          </View>
                        </View>


                      }
                    />
                  </View>
                </View>


                <View style={styles.ContainerListInner, styles.backgroundColorGreen}>
                  <View style={styles.ContainerListHeader}>
                    <MaterialIcons
                      name="navigate-next"
                      color="white"
                      size={40} />
                    <Text style={styles.NormalHeading}>Place</Text>
                  </View>

                  <View style={styles.ListView}>
                    <FlatList numColumns={2}
                      data={[
                        { key: 'London', Desc: 'Nouns are naming words' },
                        { key: 'Park', Desc: 'Pronouns are used to name nouns' },
                        { key: 'Hospital', Desc: 'Adjectives descibe nouns/pronouns' },
                      ]}
                      renderItem={({ item }) =>
                        <View>
                          <View style={styles.ContainerHorizontal}>
                            <View>
                              <MaterialIcons
                                name="info"
                                color="black"
                                size={25} />
                            </View>
                            <View>
                              <Text style={styles.NormalText}>{item.key}</Text>
                            </View>
                          </View>
                        </View>


                      }
                    />
                  </View>
                </View>
              </View>

              <View style={styles.ContainerListOuter} >
                <View style={styles.ContainerListOuter, styles.backgroundColorPurple}>
                  <View style={styles.ContainerListHeader}>
                    <MaterialIcons
                      name="navigate-next"
                      color="white"
                      size={40} />
                    <Text style={styles.NormalHeading}>Animal</Text>
                  </View>

                  <View style={styles.ListView}>
                    <FlatList numColumns={2}
                      data={[
                        { key: 'Tiger', Desc: 'Nouns are naming words' },
                        { key: 'Girafff', Desc: 'Pronouns are used to name nouns' },
                        { key: 'Lion', Desc: 'Adjectives descibe nouns/pronouns' },
                      ]}
                      renderItem={({ item }) =>
                        <View>
                          <View style={styles.ContainerHorizontal}>
                            <View>
                              <MaterialIcons
                                name="info"
                                color="black"
                                size={25} />
                            </View>
                            <View>
                              <Text style={styles.NormalText}>{item.key}</Text>
                            </View>
                          </View>
                        </View>


                      }
                    />
                  </View>
                </View>

                <View style={styles.ContainerListInner, styles.backgroundColorRed}>
                  <View style={styles.ContainerListHeader}>
                    <MaterialIcons
                      name="navigate-next"
                      color="white"
                      size={40} />
                    <Text style={styles.NormalHeading}>Thing</Text>
                  </View>

                  <View style={styles.ListView}>
                    <FlatList numColumns={2}
                      data={[
                        { key: 'Love', Desc: 'Nouns are naming words' },
                        { key: 'Watch', Desc: 'Pronouns are used to name nouns' },
                        { key: 'Table', Desc: 'Adjectives descibe nouns/pronouns' },
                      ]}
                      renderItem={({ item }) =>
                        <View>
                          <View style={styles.ContainerHorizontal}>
                            <View>
                              <MaterialIcons
                                name="info"
                                color="black"
                                size={25} />
                            </View>
                            <View>
                              <Text style={styles.NormalText}>{item.key}</Text>
                            </View>
                          </View>
                        </View>


                      }
                    />
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>

          <LinearGradient colors={['#FFEFBA', '#FFFFFF']} style={styles.ContainerVIPLG}>
            <View style={styles.ContainerContents}>
              <Text style={styles.MainHeading}>Sentences</Text>
              <Text style={styles.MainDesc}>Tushar is a very clever boy.</Text>
              <Text style={styles.MainDesc}>Hospital is located in the heart of city.</Text>
            </View>
          </LinearGradient>

          <LinearGradient colors={['#FFEFBA', '#FFFFFF']} style={styles.ContainerVIPLG}>
            <View style={styles.ListView}>
              <FlatList numColumns={2}
                data={[
                  { key: 'Common Nouns', Desc: 'Nouns are naming words' },
                  { key: 'Proper Nouns', Desc: 'Pronouns are used to name nouns' },
                  { key: 'Abstract Nouns', Desc: 'Adjectives descibe nouns/pronouns' },
                  { key: 'Countable Nouns', Desc: 'Verb is used for actions/state' },
                  { key: 'Uncountable Nouns', Desc: 'Adverbs descibe actions' },
                  { key: 'Conjuction', Desc: 'Conjuctions are used to connect sentences or words' },
                  { key: 'Preposition', Desc: 'Prepositions are used to tell the position' },
                  { key: 'Interjection', Desc: 'Interjections express emotions' },
                ]}
                renderItem={({ item }) =>
                  <View style={styles.item} onPress={() => { this.handleRedirect() }}>
                    <TouchableOpacity >
                      <View style={styles.itemRow}>
                        
                        <View style={styles.itemLabelColumn}>
                          <Text style={styles.itemHeader}>{item.key}</Text>
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
          </LinearGradient>

          <LinearGradient colors={['#FFEFBA', '#FFFFFF']} style={styles.ContainerVIPLG}>
            <View style={styles.ContainerContents}>
              <Text style={styles.MainHeading}>Sentences</Text>
              <Text style={styles.MainDesc}>Tushar is a very clever boy.</Text>
              <Text style={styles.MainDesc}>Hospital is located in the heart of city.</Text>
            </View>
          </LinearGradient>
          <LinearGradient colors={['#FFEFBA', '#FFFFFF']} style={styles.ContainerVIPLG}>
            <View style={styles.ContainerContents}>
              <Text style={styles.MainHeading}>Sentences</Text>
              <Text style={styles.MainDesc}>Tushar is a very clever boy.</Text>
              <Text style={styles.MainDesc}>Hospital is located in the heart of city.</Text>
            </View>
          </LinearGradient>

        </ScrollView>
      </View>
    )
  }
}
export default Nouns
const styles = StyleSheet.create({
  ContainerMain: {
    marginBottom: 10,
    backgroundColor: 'black',
  },
  ContainerVIPLG: {
    padding: 10,
    marginBottom: 10,
    flexDirection: 'column',
  },
  ContainerVIP:
  {
    flexDirection: 'column',
  },
  ContainerTitleLG: {
    padding: 10,
    paddingTop: 25,
    marginBottom: 10,
  },
  ContainerTitle: {

    flexDirection: 'row'
  },
  ContainerTitleBackButton: {
    flexDirection: 'column',
    flex: 0,
  },
  ContainerTitleHeading: {
    flexDirection: 'column',
    flex: 2,
  },
  TitleHeading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  ContainerContentsLG: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  ContainerContents: {

    flexDirection: 'column',

  },
  MainHeading: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    padding: 10,
  },
  MainDesc: {
    color: 'black',
    fontSize: 14,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    padding: 10,
  },
  ContainerHorizontal: {
    flexDirection: 'row',
  },
  ContainerVertical: {
    flexDirection: 'column',

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
    marginLeft:10,

  },
  item: {
    height: 75,
    marginBottom: 5,
    backgroundColor: 'lightblue',
    borderRadius: 5,
    marginLeft:10,
  },
  itemHeader: {
    paddingTop: 25,
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
  itemRow: {
    marginLeft:10,
    flexDirection: 'row'
  },
  itemAvatarColumn: {
    flexDirection: 'row',
    color: 'black',
    height: 75,
    alignSelf: 'flex-start',
    marginTop: 15,
    marginRight: 10,

  },
  itemLabelColumn: {
    flexDirection: 'column',
    marginTop: 2,
    marginLeft: 5,
    height: 75
  },
  itemNextColumn: {
    flexDirection: 'row',
    color: 'black',
    height: 75,
    marginTop: 15

  },
  itemAvatarIcon: {
    color: 'purple',
    marginLeft: 10

  },
  itemColumn: {

    flexDirection: 'column'
  },
  backgroundColorBlue: {
    backgroundColor: 'lightblue',
    margin: 10,
    borderRadius: 10,
  },
  backgroundColorGreen: {
    backgroundColor: 'lightblue',
    margin: 10,
    borderRadius: 10,



  },
  backgroundColorPurple: {
    backgroundColor: 'lightblue',
    margin: 10,
    borderRadius: 10,


  },
  backgroundColorRed: {
    backgroundColor: 'lightblue',
    margin: 10,
    borderRadius: 10,


  },
  ContainerListOuter: {
    flexDirection: 'row',

  },
  ContainerListInner: {
    flexDirection: 'column',
  },
  ContainerListHeader: {
    backgroundColor: 'black',
    margin: 5,
    flexDirection: 'row',
  },
  NormalHeading: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  NormalText: {
    color: 'black',
    fontSize: 14,
    fontWeight:'bold',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    padding: 5,
  },

})