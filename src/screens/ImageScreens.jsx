import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import ImageDetail from "./ImageDetaill";

const ImageScreen = (props) => { 
  return (
    <View>
      <ImageDetail title='Osama' imageScore='Image Score: 9/10' imageSource={require('../../assets/beach.jpg')}/>
      <ImageDetail title='Bisma' imageScore='Image Score: 10/10' imageSource={require('../../assets/forest.jpg')}/>
      <ImageDetail title='Mahnoor' imageScore='Image Score: 9.5/10' imageSource={require('../../assets/mountain.jpg')}/>
      <ImageDetail title='Aqsa' imageScore='Image Score: 8/10' imageSource={require('../../assets/forest.jpg')}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
