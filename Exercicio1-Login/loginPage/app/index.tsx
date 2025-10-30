import { Platform, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import {useState} from 'react';

export default function HomeScreen() {
  return (
    <View style={{flex:1, backgroundColor: "#EAD6FF", justifyContent: "flex-start"}}>
      <View style={{flex:1, height:200, alignItems:"center",justifyContent:'flex-start'}}>
        <Text style={styles.text}>Welcome!</Text>
        <TextInput placeholder='Email' style={styles.input}></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text : {
    color: "#A851FC",
    fontSize: 50,
    fontFamily: 'MyCustomFontName'
  },
  input: {
    backgroundColor: '#F5EBFF',
    width: 300,
    height: 35,
    borderRadius: 10,
    padding: 10,
    color: '#B4B1BD'
  }
});
