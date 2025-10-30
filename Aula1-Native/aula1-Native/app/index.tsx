import { View, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, Button, Image } from 'react-native';
import { useState} from 'react';

export default function App() {

  const [text, setText] = useState("")

  return (
    <View style={styles.squarePink}>
      <Text style={styles.colorPurple} >Anne With an E</Text>
      <TextInput placeholder='Digite aqui...' onChangeText={text => setText(text)} style={styles.input}/>
      <Text>{text}</Text>
      <TouchableOpacity>
        <View>
          <Text>Botão</Text>
        </View>
      </TouchableOpacity>
      <Button title='Clica vai' onPress={() => console.log("vc foi trolado")}></Button>
      <Image 
        style={{ width: 300, height: 500}}
        source={require('../assets/images/anne.jpg')}></Image >
    </View>
  );
}

const styles = StyleSheet.create({
  colorPurple: {
    color:"#FFD18A",
    fontSize: 50
  },
  squarePink : {
    flex: 1,
    backgroundColor: "#9FC987",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  input : {
    backgroundColor:"purple",
    color:"white" ,
    borderRadius: 5,
    padding: 2

  }
})