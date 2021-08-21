import React, { useEffect,useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity,CheckBox } from 'react-native';
import axios from 'axios';
import Globalstyles from '../Styles/GlobalStyles'
import {MaterialIcons} from '@expo/vector-icons';
import DOMParser from 'react-native-html-parser';

function QuestionScreen() {
    const [QuestionName,setQuestionName] = useState("");
    const [RecordNumber,setRecordNumber] = useState(0);
    const [AttemptedQuestions,setAttemptedQuestions] = useState(0);
    const [CorectAnswersgiven,setCorectAnswersgiven] = useState(0);
    const [Options,setOptions] = useState([]);
    const fnFetchData=()=> {

        axios.get('http://localhost:4000/app/Question')
          .then(response => {
              console.log('inside');
  
              //setData({Data:response.data})
              setQuestionName(response.data[RecordNumber]["QuestionName"]);
              setOptions(response.data[RecordNumber]["Options"]);
              
          })
          .catch((error) =>{
              console.log(error);
          })
        }
        const fnfetchCurrentData=()=>
      {
        
        setRecordNumber(RecordNumber+1)
        fnFetchData();

        fnSetSummary();
      }

      const fnSetSummary=()=>
      {
        setAttemptedQuestions(AttemptedQuestions+1)
      }

       /* useEffect(()=>{
            fnFetchData();
        },[fnFetchData]);*/
  const parser=new DOMParser.DOMParser();
  //const parsed=parser.parseFromString(QuestionName)
    return (
        <View>
            <View style={Globalstyles.text1}>
            <Text style={{color:'green',fontWeight:'bolder',marginLeft:15}}>Questions Attempted:</Text>{AttemptedQuestions}
            <Text style={{color:'green',fontWeight:'bolder',marginLeft:15}}>Answered Correctly:</Text>{CorectAnswersgiven}
            </View>
            <Text style={Globalstyles.text}>Existing Questions</Text>
            <Text style={Globalstyles.question}>{QuestionName}</Text>
            <FlatList
                data={Options}
                style={Globalstyles.options}
                renderItem={({ item }) => (
                        <View style={{flexDirection:'row'}}>
                        <CheckBox/>
                        <Text>{item.OptionText}</Text>
                        </View>
                )}
                keyExtractor={item => item._id} 
            />
            <TouchableOpacity>
                <Text style={Globalstyles.button}
                onClick={fnfetchCurrentData}><MaterialIcons name="exit-to-app"size={20} color="black"/>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default QuestionScreen
