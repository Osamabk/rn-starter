import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.imageSource}/>
      <Text>{props.imageScore}</Text>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
