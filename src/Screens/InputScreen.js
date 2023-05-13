import React from 'react';
import {View, StyleSheet, Dimensions, ImageBackground, Keyboard, TouchableWithoutFeedback} from "react-native";
import Header from "../components/Header";
import TitleBox from "../components/TitleBox";
import NameAgeBox from "../components/NameAgeBox";

const InputScreen = ({navigation}) => {

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ImageBackground
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height
                }}
                source={require('../../assets/background-grey.jpg')}>
                <View>
                    <Header navigation={navigation}/>
                    <TitleBox title={'Text Input'}/>
                    <NameAgeBox/>

                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    )

};

const styles = StyleSheet.create({});

export default InputScreen;