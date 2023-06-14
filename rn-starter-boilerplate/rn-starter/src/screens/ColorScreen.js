import React from "react";
import {View, StyleSheet, Button, FlatList} from 'react-native'
import { useState } from "react";

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors);

    return (
        <View>
            <Button title= 'ADD COLOR' 
                onPress={() => {
                setColors([...colors, randomRgb()]);
                }}
            />

            <FlatList
                keyExtractor = {item => item}
                data = {colors}
                renderItem={({ item }) => {
                    return (       
                        <View style ={{height: 200, width: 500, backgroundColor: randomRgb() }}></View>
                    );
                }}

            ></FlatList>
        </View>
    );
};

const randomRgb = () =>{
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
    text: {
        
    }
});

export default ColorScreen;