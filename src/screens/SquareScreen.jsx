import React, {useState} from "react";
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from "./ColorCounter";


const SquareScreen = () =>{
    const [Red, setRed] = useState(0);
    const [Green, setGreen] = useState(0);
    const [Blue, setBlue] = useState(0);
    console.log(Red)
    return(
        <View>
            <ColorCounter onIncrease={()=>setRed(Red+1)} onDecrease={()=>setRed(Red-1)} title='Red'/>
            <ColorCounter onIncrease={()=>setBlue(Blue+1)} onDecrease={()=>setBlue(Blue-1)} title='Blue'/>
            <ColorCounter onIncrease={()=>setGreen(Green+1)} onDecrease={()=>setGreen(Green-1)} title='Green'/>
            <View style={{height:150, width:150, backgroundColor:`rgb(${Red}, ${Green}, ${Blue})`}}/>
        </View>
    )
}

const styles=StyleSheet.create({})

export default SquareScreen 