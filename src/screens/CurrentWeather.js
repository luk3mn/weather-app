import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";

const CurrentWeather = () => {
  const { wrapper, container, temp, feels, highLowWapper, highLow, bodyWrapper, description, message } = styles
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="white-balance-sunny" size={100} color="black"/>
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText messageOne={'High: 8'} messageTwo={'Low: 6'} containerStyles={highLowWapper} messageOneStyles={highLow} messageTwoStyles={highLow}/>
      </View>
      <RowText 
        messageOne={"It's sunny"} 
        messageTwo={weatherType['ThunderStorm'].message} 
        containerStyles={styles.bodyWrapper} 
        messageOneStyles={description} 
        messageTwoStyles={message} 
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  highLowWapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 48,
    color: 'black',
  },
  message: {
    fontSize: 30,
    color: 'black',
  },
})

export default CurrentWeather;