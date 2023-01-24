import { TextInput, Image, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { useState } from "react";

export function Home(){
const [input, setinput] = useState(' ')

    return(
        <SafeAreaView style={style.container}>
            <Image source={require('../../assets/google-search.png')} style={style.image}/>
            <TextInput 
            style={style.input}
            value={input} 
            onChangeText={(e) => setInput(e)}
            placeholder="Procurar Imagens"
            />

            <Text>Página Home</Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 300,
        height: 110
    },
    input:{
        borderColor: '#d0d0d0',
        borderwidth: 1,
        borderRadius: 20,
        height: 50,
        width: '80%',
        fontSize: 20,
        paddingHorizontal: 20,
        marginVertical: 40
    }
})