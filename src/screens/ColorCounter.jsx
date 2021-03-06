import React from "react";
import { Text, View, Button, Stylesheet } from "react-native";

const ColorCounter = ({title, onIncrease, onDecrease}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Button onPress={()=>onIncrease()} title={`Increase ${title}`}/>
      <Button onPress={()=>onDecrease()} title={`Decrease ${title}`}/>
    </View>
  );
};

export default ColorCounter;
