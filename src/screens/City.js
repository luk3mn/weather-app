import React from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar, View } from "react-native";
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';
import IconText from "../components/IconText";

const City = () => {
    const { container, cityName, cityText, countryName, populationWrapper, populationText, riseSetWrapper, riseSizeText, rowLayout, imageLayout } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/city-background.jpg')} style={imageLayout}>
                <Text style={[cityName, cityText]}>London</Text>
                <Text style={[countryName, cityText]}>UK</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <IconText iconName={'account'} iconColor={'red'} bodyText={'8000'} bodyTextStyles={populationText} />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <IconText iconName={'weather-sunset-up'} iconColor={'white'} bodyText={'10:46:58am'} bodyTextStyles={riseSizeText} />
                    <IconText iconName={'weather-sunset-down'} iconColor={'white'} bodyText={'17:28:15pm'} bodyTextStyles={riseSizeText} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageLayout: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30,
    },
    riseSizeText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})
export default City;