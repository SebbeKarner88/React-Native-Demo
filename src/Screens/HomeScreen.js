import React from 'react';
import {View, ImageBackground, Dimensions} from "react-native";
import Header from '../components/Header';
import ReactLogo from "../components/ReactLogo";


const HomeScreen = ({navigation}) => {

    return (
        <ImageBackground
            style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height }}
            source={require('../../assets/background-grey.jpg')}>
            <View>
                <Header navigation={navigation}/>
                <ReactLogo/>
            </View>
        </ImageBackground>
    )
};

export default HomeScreen;