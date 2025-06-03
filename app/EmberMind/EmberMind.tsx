import TxtIn from "@/composant/TxtIn";
import {View, Text, StyleSheet  } from "react-native";



const EmberMind = () => {





    return (
        <View style = {styles.screen__ember_mind}>
            <Text>
            Test
            </Text>
            <TxtIn/>
        </View>
    );
} 
export default EmberMind;


const styles = StyleSheet.create({

    screen__ember_mind : {
        width:"100%",
        height:"100%",
        backgroundColor:"red",

    }


})