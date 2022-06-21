import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hi, There!</Text>
      <Button
        onPress={() => {
          props.navigation.navigate("Components");
        }}
        title="Go to Components Demo."
      />

      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text>Go to Touchable Opacity</Text>
      </TouchableOpacity>
      <Button
        onPress={() => {
          props.navigation.navigate("Image");
        }}
        title="Go to Images De."
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("Counter")}>
        <Text>Go to Counter</Text>
      </TouchableOpacity>
      <Button
        onPress={() => {
          props.navigation.navigate("Color");
        }}
        title="Go to Colors Demo."
      />
      <TouchableOpacity onPress={()=>props.navigation.navigate('Text')}><Text>Go to Square demo</Text></TouchableOpacity>
      <Button
        onPress={() => {
          props.navigation.navigate("Text");
        }}
        title="Go to Text Demo."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
