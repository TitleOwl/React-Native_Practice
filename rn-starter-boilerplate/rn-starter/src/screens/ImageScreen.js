import React from "react";
import { Text, View, Button, StyleSheet} from "react-native";
import ImageDetail from "../components/ImageDetail";
 
const ImageScreen = () =>{
    return (
    <View>
        <ImageDetail 
            title= "Forest"
            imageSource={require('../../assets/forest.jpg')}
            score={8}
        />

        <ImageDetail
            title= "Beach"
            imageSource={require('../../assets/beach.jpg')}
            score={10}
        />

        <ImageDetail
            title= "Mountain"
            imageSource={require('../../assets/mountain.jpg')}
            score={9}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    text:{
        fontSize: 30
    }
});
    
export default ImageScreen;