import React,{useState} from 'react';
import {StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';
import { Button, StyleSheet,ScrollView , Text, View } from 'react-native';

const App = () => {


  // *********************state define state (name,session and flag)*****************************************
  const [name, setName]= useState('hi')//text 
  const [session, setSession] = useState({number: 1 , title: 'state'}) //obj
  const [flag, setFlag] = useState(true) //boolean
  // ***************************************************************************************************

  // **********************state arrow function to make react page change the name, session and flag state *********************************************
  // const changeText = ()=>{
  //   setName('My name is ftoon')
  //   setSession({number: 7, title:'style'})
  //   setFlag(false)
  // }
  // ***********************************************************************************************

  // ******************************** exercise 1 state  ***********************************
  // const [counter, setCounter] = useState (0)
  // const [clicks, setClicks] = useState(0)
  // const updateCounterClicks = ()=>{
  //   setCounter(counter+5)
  //   setClicks(clicks+1)
  // }

  // ******************************** scrollView and refreshControl*****************************************
  const [items, setItems] = useState([
    {key: 1, item: 'item 1'},
    {key: 2, item: 'item 2'},
    {key: 3, item: 'item 3'},
    {key: 4, item: 'item 4'},
  ])
  
  return (

    // ******************************** scrollView and refreshControl*****************************************
    <ScrollView style = {styles.container}>
      {items.map((obj)=>{
        <View key={object.key}>
          <Text>{obj.item}</Text>
        </View>
      })}
    </ScrollView>



    // <View style={styles.container}>
      
    //   {/* ******************************** exercise 1 state  *********************************** */}
    //   <Text style = {styles.text}>{counter}</Text>
    //   <Button title='add' onPress={updateCounterClicks}></Button>
    //   <Text style = {styles.text}>you clicked {clicks} times</Text>

    //   {/* **********************************state view and change the state ***************************************** */}
    //   {/* <Text style={styles.text}>{name}</Text>
    //   <Text style={styles.text}>session number {session.number} about {session.title}</Text>
    //   <Text style={styles.text}>{flag? 'the flag value true' : 'the flag value false'}</Text>
    //   <Button title='change the text ' onPress={changeText}></Button> */}
    //   {/* ********************************************************************************************************* */}

    //   {/* <StatusBar style="auto" /> */}

    //   {/* ****************************button to open URL link *********************************** */}
    //   {/* <Button title='click to open the link ' onPress={()=>{Linking.openURL('https://media-exp1.licdn.com/dms/image/C4D03AQEcViOUb_Q6lg/profile-displayphoto-shrink_200_200/0/1640362143874?e=1672272000&v=beta&t=pIJry3Kuz3dnBnpr3rtgRTTX3KLNog3AQOcVMcihnik');}}></Button> */}
    

    // </View>

    // ************************ **** exercise 2 flex *****************************************
    // <View style={styles.body}>
    //   <View style={styles.row}>
    //     <View style={styles.view1}>
    //       <Text style={styles.text}>1</Text>
    //     </View>
    //     <View style={styles.view2}>
    //       <Text style={styles.text}>2</Text>
    //     </View>
    //     <View style={styles.view3}>
    //       <Text style={styles.text}>3</Text>
    //     </View>
    //   </View>
    //   <View style={styles.row}>
    //     <View style={styles.view4}>
    //       <Text style={styles.text}>4</Text>
    //     </View>
    //   </View>
    //   <View style={styles.row}>
    //     <View style={styles.view5}>
    //       <Text style={styles.text}>5</Text>
    //     </View>
    //   </View>
    //   <View style={styles.big_row}>
    //     <View style={styles.view6}>
    //       <Text style={styles.text}>6</Text>
    //     </View>
    //     <View style={styles.view7}>
    //       <Text style={styles.text}>7</Text>
    //     </View>
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item:{
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // text:{
  //   color: '#FF0000',
  //   margin: 10,
  // }

  // ************************ **** exercise 2 flex *****************************************
  // body:{
  //   flex: 1,
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // row:{
  //   flexDirection:'row-reverse',
  // },
  // big_row:{
  //   flex: 1,
  //   flexDirection: 'row-reverse',
  //   alignItems: 'stretch',
  // },
  // view1:{
  //   flex: 1,
  //   backgroundColor: '#05feff'
  // },
  // view2:{
  //   flex: 2,
  //   backgroundColor: '#f0f'
  // },
  // view3:{
  //   flex: 3,
  //   backgroundColor: '#ffff04',
  // },
  // view4:{
  //   flex: 1,
  //   margin:40,
  //   backgroundColor: '#ff0002',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // view5:{
  //   flex:1 ,
  //   backgroundColor: '#16fd16',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // view6:{
  //   flex: 1,
  //   backgroundColor: '#ebebeb',
  //   alignItems: "center",
  //   justifyContent:'center',
  // },
  // view7:{
  //   flex:1,
  //   alignItems: "center",
  //   justifyContent:'center',
  //   backgroundColor: '#0300ff',
  // },
  // text:{
  //   margin: 10,
  // }
});

export default App;