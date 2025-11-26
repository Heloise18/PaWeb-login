import { Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection, getDocs, query, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import { Link, router } from 'expo-router';
import Swal from 'sweetalert2';


export default function list() {
    const [music, setMusic] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    async function fetchMusics() {
        try {
            const q = query(collection(db, 'music'))
            const snapshot = await getDocs(q)
            const list = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            console.log(list)
            setMusic(list)

        } catch (e) {
            console.log("Erro ao buscar musicas:", e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMusics();
    }, []);

    return (
        <View style={styles.container}>

            <View style={styles.body}>
                <Text style={styles.text}> Musicas </Text>
                <FlatList
                    data={music}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View
                        style={{
                            backgroundColor: "#fff",
                            padding: 16,
                            borderRadius: 12,
                            marginBottom: 15,
                            elevation: 3,
                        }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: "600" }}>
                                {item.name} {item.singer}
                            </Text>
                            <Image source={item.img}/>

                            <Text style={{ opacity: 0.7 }}>Duração: {item.duration}</Text>
                            <Text style={{ opacity: 0.7 }}>Genero: {item.genre}</Text>

                            <View style={{ flexDirection: "row", marginTop: 12, gap: 12 }}>
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: "#3498db",
                                        paddingVertical: 8,
                                        paddingHorizontal: 14,
                                        borderRadius: 8,
                                    }}
                                    >
                                    <Text style={{ color: "#fff", fontWeight: "600" }}>Editar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{
                                        backgroundColor: "#e74c3c",
                                        paddingVertical: 8,
                                        paddingHorizontal: 14,
                                        borderRadius: 8,
                                    }}
                                    >
                                    <Text style={{ color: "#fff", fontWeight: "600" }}>Excluir</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    />
            </View>

        </View>
    )
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
        height: "100%",
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
