import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const TextScreen = () => {
    return(
        <View>
            <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} />
        </View>
    )
};

const styles = StyleSheet.create({
    input:{
        fontSize:25,
        margin: 35,
        borderColor: 'black',
        borderWidth:3
    }
});
export default TextScreen;
