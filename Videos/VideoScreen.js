import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Video, Audio } from 'expo-av';
import axios from 'axios';
import Globalstyles from '../Screens/Styles/GlobalStyles'


export class VideoScreen extends Component {
  //https://youtu.be/sAqVlDkdcmE
  // https://youtu.be/iTOYAMvEbEo
  constructor(props) {
    super(props)
    this.fnFetchData = this.fnFetchData.bind(this);
    this.state = {
      InputData: []
    }
  }
  componentDidMount() {
    this.fnFetchData();
  }

  fnFetchData = () => {
    axios.get('http://localhost:4000/app/Video')
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
      <View style={Globalstyles.ContainerMain}>
        
        <FlatList data={this.state.InputData}
          renderItem={({ item }) => (
            <View>
              <Text key={item._id}>{item.Category}</Text>

              <Video
                source={{ uri: item.Link }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                useNativeControls
                shouldPlay
                resizeMode='cover'
                isLooping
                style={Globalstyles.video}
                //style={{ width: 300, height: 300 }}
              />
              <Text key={item._id}>{item.Title}</Text>
            </View>
          )}
          keyExtractor={item => item._id} />
      </View>
          
    )}
}

export default VideoScreen


/*import * as React from 'react';
import axios from 'axios';
import { View, StyleSheet, Button, FlatList } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import Globalstyles from '../Screens/Styles/GlobalStyles'
import { useEffect } from 'react';



export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [InputData, setInputData] = React.useState([]);

  const fnFetchData = () => {
    axios.get('http://192.168.206.132:4000/app/Video')
      .then(response => {

        const data = response.data;
        //const Inputdata=[]
        setInputData(data);
        //Inputdata.push(data);
        console.log('inside');
        //console.log('Data', +InputData);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    fnFetchData();
  })

  return (
    <View style={Globalstyles.ContainerMain}>
      <FlatList>
          renderItem={({item})=>
          <Video source={item.Link}
            ref={video}
                style={Globalstyles.video}
                source={item.Link}
                useNativeControls
                resizeMode="contain"
                isLooping
          />
        }
        {/*  return (
            <div>
              <div key={item._id}>{item.Category}</div>
              <li>{item.Title}</li>
              <Video
                ref={video}
                style={Globalstyles.video}
                source={item.Link}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
              />
              <View style={Globalstyles.buttons}>
                <Button
                  title={status.isPlaying ? 'Pause' : 'Play'}
                  onPress={() =>
                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                  }
                />
              </View>
            </div>
          )
        })}

      </FlatList>

    </View>
  );
}
*/