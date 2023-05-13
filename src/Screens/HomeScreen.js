import React from 'react';
import {View, Image, ImageBackground, Dimensions, StyleSheet, Text} from "react-native";
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
                <View style={{alignItems: 'center'}}>
                    <Image
                        style={styles.image}

                        source={require('../../assets/pngaaa.com-3691859.png')}
                    />
                    <Text style={styles.text}>React Native</Text>
                </View>
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    image: {
        marginTop: 150,
        overflow: 'visible',
        height: 272,
        width: 305,
        shadowColor: '#000',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 0.9,
        shadowRadius: 4
    },
    text: {
        marginTop: 25,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#5fc4e4',
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.9,
        shadowRadius: 1
    }
});


export default HomeScreen;