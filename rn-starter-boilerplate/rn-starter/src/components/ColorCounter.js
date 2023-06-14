import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native'

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return  (
        <View style={styles.container} >
            <Text style={styles.text}>{color}</Text> 
            <Button 
              title={`More ${color}`}
              onPress={() => onIncrease()}
            />
            <Button 
              title={`Less ${color}`}
              onPress={() => onDecrease()}
            />
        </View>
    )

}
 
const styles = StyleSheet.create({
    container: {
      margin: 20, 
      justifyContent: "center",
  
    },
    text: {
      fontSize: 20,
      textAlign: "center",
      margin: 30,
    }
  });
  

export default ColorCounter;
