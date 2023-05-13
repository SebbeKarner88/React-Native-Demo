import React from 'react';
import {View, Text, ImageBackground, Dimensions} from "react-native";
import Header from '../components/Header';


const HomeScreen = ({navigation}) => {

    return (
        <ImageBackground
            style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height
            }}
            source={require('../../assets/background-grey.jpg')}>
            <View>
                <Header navigation={navigation}/>

                <Text>HÄR MÅSTE VI LÄGGA IN NÅ SNYGGT!!!</Text>

            </View>
        </ImageBackground>
    )
};


export default HomeScreen;