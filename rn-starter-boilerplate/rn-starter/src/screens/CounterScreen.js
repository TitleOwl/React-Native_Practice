import React from "react";
import { useState } from "react"
import {Text, View, StyleSheet, Button} from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return  (
    <View>
        <Text style={styles.text}>Current Count: {counter}</Text>
        
        <View style={styles.buttonContainer}>
        <Button
          title="Increase"
            onPress={() => {
                setCounter(counter + 1);
                console.log(counter)
            }}
        />

        <Button
            title="Decrease"
            onPress={() => {
                setCounter(counter - 1);
                console.log(counter)
            }}
        />
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize: 30,
        margin: 30,
        textAlign: "center"
        
    },
    buttonContainer:{
        margin:30,
        justifyContent: 'center',
        padding: 50,
    }

});

export default CounterScreen;