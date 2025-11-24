import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import {useState, useEffect} from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebaseConfig'
import { Link, router } from 'expo-router';
  import Swal from 'sweetalert2';


export default function HomeScreen() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const minPassword = 6
0
  const auth = getAuth(app)

  const signUp = async () =>{
    if(password.length >= minPassword )
    {
      if(password === confirmPassword){
        try{
          await createUserWithEmailAndPassword(auth,email,password )
          Swal.fire({
          icon:"success",
          title:"Sucesso",
          text:"Usuario registrado"
        });
          return router.navigate('/login')
        }
        catch(e){
          return Swal.fire({
          icon:"error",
          title:"Erro",
          text:"email já existe!"
        });
        }
      }
      else{
        return Swal.fire({
          icon:"error",
          title:"Erro",
          text:"Sebhas não são iguais"
        });
      }

    }
    else{
      return Swal.fire({
          icon:"error",
          title:"Error",
          text:"Minimo de caracteres para senha é 6"
        });
    }
  }

  useEffect(() => {
    console.log(email, password, confirmPassword)
  },[email,password,confirmPassword])

  return (
    <View style={styles.container }>
      <View style={styles.nav}>
        <Text style={styles.text}>Cadastro</Text>
      </View>
      <View style={styles.body}>

        <TextInput placeholder='Email' style={styles.input} onChangeText={(value) => setEmail(value)}></TextInput>
        <TextInput secureTextEntry={true} placeholder='Senha' style={styles.input} onChangeText={(value) => setPassword(value)}></TextInput>
        <TextInput secureTextEntry={true} placeholder='Confirmar Senha' style={styles.input} onChangeText={(value) => setConfirmPassword(value)}></TextInput>
 
        <TouchableOpacity style={styles.button} onPress={signUp}>
          <Text style={styles.textbutton}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('botão clicado')}>
          <Link href={'/login'} style={[styles.textbutton2]}> Já tem conta? </Link>
        </TouchableOpacity>
      </View>
      <View style={styles.final}>
        <TouchableOpacity style={styles.button2}>
          <Image  source={require("../assets/images/googlepequeno.png")}></Image>
          <Text style={{fontSize: 25, fontFamily: 'MyCustomFontName', color: " "}}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button3}>
          <Image  source={require("../assets/images/facebook40.png")}></Image>
          <Text style={{fontSize: 25, fontFamily: 'MyCustomFontName', color: " "}}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor: "#FAEBD7", 
    justifyContent: "flex-start",
    gap : 20
  },
  nav:{
    width: "100%",
    height : "20%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"

  },
  body:{
    width: "100%",
    height : "40%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap : 20  
  },
  final:{
    width: "100%",
    height : "40%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    gap : 20,
    flexDirection: "column"
  },
  text : {
    color: "Black",
    fontSize: 50,
    fontFamily: 'MyCustomFontName',
  },
  img : {
    width: "40%",
    height: "100%"
  },
  input: {
    backgroundColor: '#FF7F50',
    width: 300,
    height: 45,
    borderRadius: 10,
    padding: 10,
    color: 'black'
  },
  button : {
    backgroundColor: "#FF7F50",
    width: 300,
    height: 45,
    borderRadius: 10,
    padding: 10,
    display:"flex",
    justifyContent:"center",
    alignItems: "center"
  },
  button2 : {
    width: 300,
    height: 20,
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    flexDirection: "row"
  },
  button3 : {
    width: 80,
    height: 20,
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    flexDirection: "row"
  },
  textbutton :{
    fontSize: 20,
    fontFamily: 'MyCustomFontName',
    color: "black"
  },
  textbutton2 :{
    fontSize: 15,
    fontFamily: 'MyCustomFontName',
    color: "#FF7F50"
  }

});
