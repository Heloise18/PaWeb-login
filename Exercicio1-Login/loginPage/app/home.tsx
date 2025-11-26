import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { Link, router } from 'expo-router';
import Swal from 'sweetalert2';


export default function home() {

    const [name, setName] = useState("")
    const [singer, setSinger] = useState("")
    const [duration, setDuration] = useState("")
    const [genre, setGenre] = useState("")
    const [country, setCountry] = useState("")
    const [language, setLanguage] = useState("")
    const [img, setImg] = useState("")

    async function registerMusic() {
        try {
            // const auth = getAuth()
            // const user = auth.currentUser

            // if (!user) {
            //     console.log("User not log")
            //     return
            // }

            if (!name || !singer || !duration || !genre || !country || !language || !img) {
                console.log('error')
                return
            }


            const music = {
                name,
                singer,
                duration: Number(),
                genre,
                country,
                language,
                img,
                // userId: user.uid
            }
            await addDoc(collection(db, 'music'), music)
            console.log("Música cadastrada")

        } catch (e) {
            console.log("Erro ao cadastrar", e)
        } 
    }

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <Text style={styles.text}>Home</Text>
            </View>

            <View style={styles.body}>
                <TextInput placeholder='Music Name' style={styles.input} onChangeText={(value) => setName(value)}></TextInput>
                <TextInput placeholder='Singer Name' style={styles.input} onChangeText={(value) => setSinger(value)}></TextInput>
                <TextInput placeholder='Duration (hours)' style={styles.input} onChangeText={(value) => setDuration(value)}></TextInput>
                <TextInput placeholder='Genre' style={styles.input} onChangeText={(value) => setGenre(value)}></TextInput>
                <TextInput placeholder='Origin Country ' style={styles.input} onChangeText={(value) => setCountry(value)}></TextInput>
                <TextInput placeholder='Language' style={styles.input} onChangeText={(value) => setLanguage(value)}></TextInput>
                <TextInput placeholder='Link Image Album' style={styles.input} onChangeText={(value) => setImg(value)}></TextInput>

                <TouchableOpacity style={styles.button} onPress={registerMusic} >
                    <Text style={styles.textbutton}>Continue</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Link href={'/list'} style={[styles.textbutton]}> Vizualizar lista de musicas </Link>
                </TouchableOpacity>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAEBD7",
        justifyContent: "flex-start",
        gap: 20
    },
    body: {
        width: "100%",
        height: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    text: {
        color: "Black",
        fontSize: 50,
        fontFamily: 'MyCustomFontName',
    },
    nav: {
        width: "100%",
        height: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    input: {
        backgroundColor: '#FF7F50',
        width: 300,
        height: 45,
        borderRadius: 10,
        padding: 10,
        color: 'black'
    },
    button: {
        backgroundColor: "#FF7F50",
        width: 300,
        height: 45,
        borderRadius: 10,
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    textbutton: {
        fontSize: 15,
        fontFamily: 'MyCustomFontName',
        color: 'black'
    }

})
