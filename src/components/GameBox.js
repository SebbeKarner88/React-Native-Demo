import React from "react";
import {Dimensions, Image, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";

const GameBox = ({title, system, image, rating}) => {

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{alignItems: 'center'}}>
                <View style={styles.gameBox}>
                    <View style={styles.gameCard}>
                        <Image
                            style={styles.image}
                            source={{uri: `${image}`}}
                        />
                        <View>
                            <Text style={styles.Title}>{title}</Text>
                            <Text style={styles.system}>{system}</Text>
                            <Text style={styles.rating}>Rating: {rating}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    gameBox: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.64)',
        marginTop: 30,
        width: Dimensions.get('window').width - 50,
        height: 150,
        padding: 5,
        borderRadius: 15,
        borderStyle: 'solid',
        borderColor: '#60c5e5',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#e8e8e8',
    },
    gameCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    image: {
        height: 100,
        width: 100,
        marginRight: Dimensions.get('window').width * 0.15,
        borderColor: 'rgba(108,108,108,0.69)',
        borderRadius: 5,

    },
    system: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#939393',
    },
    rating: {
        marginTop: 8,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#7b93ff',
    }

});

export default GameBox;