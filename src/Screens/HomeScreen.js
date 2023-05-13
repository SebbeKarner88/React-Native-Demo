import React from 'react';
import {View, StyleSheet, Text, ImageBackground, Dimensions} from "react-native";
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

                <Text>HOME</Text>

            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({});

export default HomeScreen;