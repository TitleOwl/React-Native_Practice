import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  const Title = "My Project Test";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Title}</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Components"
          onPress={() => navigation.navigate("Component")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="List"
          onPress={() => navigation.navigate("List")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Image"
          onPress={() => navigation.navigate("Image")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Counter"
          onPress={() => navigation.navigate("Counter")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Color"
          onPress={() => navigation.navigate("Color")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Square"
          onPress={() => navigation.navigate("Square")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "skyblue"

  },
  text: {
    fontSize: 30,
    textAlign: "center",
    margin: 30,
  },

  buttonContainer: {
    marginVertical: 10,
    width: "80%",
    
  },
  

});

export default HomeScreen;
