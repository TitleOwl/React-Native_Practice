import React from "react";
import { Text, StyleSheet, View } from "react-native";


const ComponentsScreen = () => {
    const name = 'Thank'

    return (
        <View>
            <Text style={styles.textStyles_1}>Getting Started with react native!</Text>
            <Text style={styles.textStyles_2}>My name is {name}!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyles_1: {
        fontSize: 45
    },
    textStyles_2: {
        fontSize: 20
    }
});



export default ComponentsScreen;