import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const { item, date, temp } = styles
    return (
        <View style={item}>
            <Feather name="sun-thermometer" size={50} color="white"/>
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    temp: {
        color: 'white',
        fontSize: 20,
    },
    date: {
        color: 'white',
        fontSize: 15
    },
})

export default ListItem;