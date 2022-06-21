import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
  const freinds = [
    { name: "Osama", age:'25'},
    { name: "Bisma", age:'21'},
    { name: "Mahnoor", age:'27'},
    { name: "Aqsa", age:'28'},
    { name: "Amna", age:'29'},
    { name: "Saba", age:'25'},
    { name: "Maria", age:'30'}
  ];
  return (
    <View>
      <FlatList
      keyExtractor={freind=>freind.namea}
        data={freinds}
        renderItem={({ item }) => {
          return <Text style={styles.fontStyle}>Name: {item.name} - Age: {item.age}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fontStyle: {
    color: "gray",
    // marginVertical: 50,
    fontSize: 22,
  },
});

export default ListScreen;
