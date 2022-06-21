import React from 'react'
import {Text, View, StyleSheet} from 'react-native'


const ComponentsScreen =()=>{
    const name='Osama'
    return(
        <View>
            <Text style={styles.textOne}>Hello, This is React Starter Testting!</Text>
            <Text style={styles.textTwo}>Developer Name is : {name}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    textOne:{
        fontSize:20,
        color: 'white',
        backgroundColor: "black"
    },
    textTwo:{
        backgroundColor:'gray',  
        color:'white'
    }
})

export default ComponentsScreen