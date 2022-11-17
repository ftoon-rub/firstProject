import React,{useState} from 'react';
import {StatusBar } from 'expo-status-bar';
import * as Linking from 'expo-linking';
import { Button, StyleSheet,ScrollView , Text, View, RefreshControl, FlatList,SectionList, TextInput, Alert ,Modal} from 'react-native';

const App = () => {

  // react native course:  https://www.youtube.com/watch?v=ANdSdIlgsEw
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

  //*********************************Exercise 3 FlatList & SectionList with Nested Array ***************************************************** */
  //   const [refreshSectionList,setRefSectionList] = useState(false)
  //   const [listCounter,setListCounter]=useState(3)

  //   const [DATA,setData] = useState( [
  //     {
  //       title: 'Title 1',
  //       data: ['item 1.1', 'item 1.2', 'item 1.3'],
  //     },
  //     {
  //       title: 'Title 2',
  //       data: ['item 2.1', 'item 2.2'],
  //     },
      
  //   ])

  // const onRefershingSectionList = () =>{
  //   let itemNum = 1;

  //   setRefSectionList(true)
  //   setData([...DATA,{title: 'Title ' + listCounter ,data: ['item' + listCounter + '.'+ itemNum++,'item' + listCounter + '.'+ itemNum++, 'item' + listCounter + '.'+ itemNum++],}])
  //   setListCounter(listCounter + 1)
  //   setRefSectionList(false)
  // }

  // ******************************** scrollView and refreshControl*****************************************
  // const [items, setItems] = useState([
  //   {key: 1, item: 'item 1'},
  //   {key: 2, item: 'item 2'},
  //   {key: 3, item: 'item 3'},
  //   {key: 4, item: 'item 4'},
  //   {key: 5, item: 'item 5'},
  //   {key: 6, item: 'item 6'},
  //   {key: 7, item: 'item 7'},
  //   {key: 8, item: 'item 8'},
  //   {key: 9, item: 'item 9'},
  //   {key: 10, item: 'item 10'},
  //   {key: 11, item: 'item 11'},
  //   {key: 12, item: 'item 12'},

  // ])
  // const [refresh,setRef] = useState(false)

  // const onRefershing = () =>{
  //   setRef(true)
  //   setItems([...items,{key: 13, item: 'new item 13'}])
  //   setRef(false)
  // }

  // ******************************** FlatList and SectionList*****************************************
  // flatlist
  //   const [refreshFlatList,setRefFlatList] = useState(false)

  // const onRefershingFlatList = () =>{
  //   setRefFlatList(true)
  //   setNames([...names,{key: '13', name: 'new name 13'}])
  //   setRefFlatList(false)
  // }
  //  const [names, setNames] = useState([
  //   {key: '1,', name: 'name 1'},
  //   {key: '2,', name: 'name 2'},
  //   {key: '3,', name: 'name 3'},
  //   {key: '4,', name: 'name 4'},
  //   {key: '5,', name: 'name 5'},
  //   {key: '6,', name: 'name 6'},
  //   {key: '7,', name: 'name 7'},
  //   {key: '8,', name: 'name 8'},
  //   {key: '9,', name: 'name 9'},
  //   {key: '10', name: 'name 10'},
  //   {key: '11', name: 'name 11'},
  //   {key: '12', name: 'name 12'},

  // ])

  // sectionList 
  // const DATA = [
  //   {
  //     title: 'Title 1',
  //     data: ['item 1.1', 'item 1.2', 'item 1.3'],
  //   },
  //   {
  //     title: 'Title 2',
  //     data: ['item 2.1', 'item 2.2'],
  //   },
  //   {
  //     title: 'Title 3',
  //     data: ['item 3.1', 'item 3.2', 'item 3.3'],
  //   },
  // ]

  //****************************Text Input & Keyboard******************************* */
  // const [userName, setUserName] = useState('')

  //*******************************Button, Touchables & Pressable And alert ********************** */
  const [userName, setUserName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const onPressHandler =()=>{
    if(userName.length > 0){
      setSubmitted(!submitted)
    }else{
      Alert.alert('warning', 'this field is required',[
        {text: 'Do not show again' , onPress: () => console.warn('Do not show this again ')},
        {text: 'Cancel' , onPress: () => console.warn('we will see you again')},
        {text: 'OK' , onPress: () => console.warn('thank you')}
    ], {cancelable: true ,onDismiss:()=> console.warn('alert dismissed')})
    }
    

    // if(userName != ''){
    //   setSubmitted(!submitted)
    // }
  }

  //************************************modal ********************************** */
  const [showModal, setShowModal] = useState(false)

  return (

      //*******************************Button, Touchables & Pressable And modal ********************** */
      <View style={styles.body}>
        <Modal
          visible={true}

        >
          <Text>the name is required</Text>
        </Modal>
        <Text style={styles.container} >
          Please write your name:
        </Text>
        <TextInput
          style={styles.input}
          placeholder='e.g ftoon'
          onChangeText={(value)=>{
            setUserName(value)
          }}
        ></TextInput>
        <Button 
        title={submitted? 'clear' : 'submit'}
        onPress={onPressHandler}
        disabled ={submitted}
        ></Button>
        {submitted?<Text style={styles.text}>You are registered as {userName} {String(submitted)}</Text> : null}
      </View>

      //****************************Text Input & Keyboard******************************* */
      // <View style={styles.body}>
      //   <Text style={styles.container} >
      //     Please write your name:
      //   </Text>
      //   <TextInput
      //     style={styles.input}
      //     placeholder='e.g ftoon'
      //     onChangeText={(value)=>{
      //       setUserName(value)
      //     }}
      //   ></TextInput>
      //   <View>
      //     <Text style={styles.item}>{userName}</Text>
      //   </View>
      // </View>

    // ******************************** FlatList and SectionList*****************************************
    // <FlatList
    //   data={names}
    //   renderItem={({item})=>{
    //     return(
    //       <View style = {styles.container} >
    //       <Text style = {styles.item}>{item.name}</Text>
    //       </View>
    //      )
    //   }} //act as map 
    //   refreshControl={
    //       <RefreshControl
    //         refreshing={refreshFlatList}
    //         onRefresh={onRefershingFlatList}
    //       />
    //     }
    // />

    // <SectionList
    //   keyExtractor={(item, index) => index.toString()}
    //   sections={DATA}
    //   renderItem={({item})=>{
    //     return(
    //       <View >
    //       <Text style = {styles.item}>{item}</Text>
    //       </View>
    //      )
    //   }} //act as map 
    //   renderSectionHeader = {({section})=>{
    //     return(
    //       <View style = {styles.container} >
    //       <Text style = {styles.item}>{section.title}</Text>
    //       </View>
    //     )
    //   }}
    // />

    // ******************************** scrollView and refreshControl*****************************************
    // <ScrollView  style = {styles.body}
    // refreshControl={
    //   <RefreshControl
    //         refreshing={refresh}
    //         onRefresh={onRefershing}
    //       />
    // }>
    //   {items.map((obj)=>{
    //     return(
    //       <View style = {styles.container} key={obj.key}>
    //       <Text style = {styles.item}>{obj.item}</Text>
    //     </View>
    //     )
      
    //   })}
    // </ScrollView>


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

    //*********************Exercise 3 FlatList & SectionList with Nested Array *******************************
    // <SectionList
    //   sections={DATA}
    //   keyExtractor = {(item, index)=> index.toString()}
    //   renderItem = {({item})=>{
    //     return(
    //       <View>
    //         <Text style={styles.item}>{item}</Text>
    //       </View>
    //     )
    //   }}
    //   renderSectionHeader = {({section})=>{
    //     return(
    //       <View style={styles.container}>
    //         <Text style={styles.item}>{section.title}</Text>
    //       </View>
    //     )
    //   }}
    //   refreshControl = {
    //     <RefreshControl
    //       refreshing = {refreshSectionList}
    //       onRefresh ={onRefershingSectionList}
    //     />
    //   }
    // />

    //************************************************************************************************************ */
  );
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    margin: 10,
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item:{
    margin: 10,
    fontSize: 45,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    marginBottom:10,
    width: 200,
    fontSize: 20,
    borderWidth:1,
    borderRadius:5,
    textAlign: 'center',

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