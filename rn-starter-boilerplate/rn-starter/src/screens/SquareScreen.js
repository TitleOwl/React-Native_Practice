import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from "../components/ColorCounter";
import { useState } from 'react';

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    console.log(red)
    
    return  (
        <View style={styles.background}>
            <Text style={styles.text}>Square Screen</Text>
            <ColorCounter 
                onInprease={() => setRed(red + 1)}
                onDecrease={() => setRed(red - 1)}
                color="Red"
            />

            <ColorCounter color="Green"/>
            <ColorCounter color="Blue"/>

        </View>
    )

}
 
const styles = StyleSheet.create({

    text: {
        fontSize: 30,
        textAlign: "center",
        margin: 10,
        backgroundColor: "pink"
    },

    background:{
        backgroundColor: "white"
    }
});
    

export default SquareScreen;
