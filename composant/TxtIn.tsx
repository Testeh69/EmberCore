import { TextInput, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React, {useState} from "react";

const TxtIn = () => {

    const [textInsideInput, setTextInsideInput] = useState<string>("")



    return (
        <View style = {styles.box__input}>
            <TextInput
            style  = {styles.input___area}
            placeholder="Veuillez entrer votre requête"
            onChangeText = {setTextInsideInput}
            />
            <TouchableOpacity style = {styles.btn}>
                <Text>Test</Text>
            </TouchableOpacity>
        </View>



    );
}

export default TxtIn;


const styles = StyleSheet.create({

    box__input : {
        borderTopWidth:0.5,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"orange",
        maxHeight:80,
        height:"10%",
    },

    input___area : {
        borderColor: "#000000",
        borderRadius: 18,
        borderWidth: 0.5,
        margin:10,
        width:
    },

    btn: {
        backgroundColor: "#ffffff",
        borderRadius: 15
    }



})