import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export function Home({ navigation }){
    const [value , setValue] = useState("")

    const onSearch = () =>{
        navigation.navigate("Search", {
            text: value
        });
    }

    const logOff = async() =>{
        await AsyncStorage.removeItem("isAuth")
        navigation.navigate("Login")
    }

    return(
        <SafeAreaView style={style.container}>
            <Image style={style.image} source={require("../../assets/logo.png")}/>
            <TextInput
            style={style.input}
            value={value}
            onChangeText={(e)=>setValue(e)}
            placeholder="Procurar imagens"
            />
            <TouchableOpacity onPress={()=>onSearch()} style={style.button}>
                <Text>Buscar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 300,
        height: 100,
    },
    input: {
        borderColor: "#d0d0d0",
        borderWidth: 1,
        borderRadius: 20,
        height: 50,
        width: "80%",
        fontSize: 20,
        paddingHorizontal: 20,
        marginVertical: 40
    },
    button: {
        backgroundColor: "#e8e8e8",
        height: 40,
        width: 100,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    }

})










// import { Button, TochableOpacity, TextInput, Image, SafeAreaView, StyleSheet, View, Text } from "react-native";
// import { useState } from "react";


// export function Home(){
//     const [input, setInput] = useState(' ')

    

//     return(
//         <SafeAreaView style={style.container}>
//             <Image source={require('../../assets/google-search.png')} style={style.image}/>
//             <TextInput 
//             style={style.input}
//             value={input} 
//             onChangeText={(e) => setInput(e)}
//             placeholder="Procurar Imagens"
//             />
//             <TochableOpacity style={style.button}>
//                     <Text> Buscar </Text>
//             </TochableOpacity>

//             {/* <Text>Página Home</Text> */}
//         </SafeAreaView>
//     )
// }

// const style = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#ffffff',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     image: {
//         width: 300,
//         height: 110
//     },
//     input: {
//         borderColor: '#d0d0d0',
//         borderwidth: 1,
//         borderRadius: 20,
//         height: 50,
//         width: '80%',
//         fontSize: 20,
//         paddingHorizontal: 20,
//         marginVertical: 40
//     },
//     button: {
//        backgroundColor: '#ffffff',
//        height: 40,
//        width: 100,
//        borderRadius: 5,
//        alignItems: 'center',
//        justifyContent: 'center'

//     }
// })