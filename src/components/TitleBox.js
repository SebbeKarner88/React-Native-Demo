import React from "react";
import {Dimensions, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";

const TitleBox = ({title}) => {

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{alignItems: 'center'}}>
                <View style={styles.TitleBox}>
                    <Text style={styles.Title}>{title}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    TitleBox: {
        backgroundColor: 'rgba(0,0,0,0.64)',
        marginTop: 30,
        width: Dimensions.get('window').width - 50,
        height: 'auto',
        padding: 20,
        borderRadius: 15,
        borderStyle: 'solid',
        borderColor: '#60c5e5',
        borderWidth: 2,
        justifyContent: 'flex-start',
        alignItems: 'center'

    },
    Title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#60c5e5',
        letterSpacing: 1.5

    }
});

export default TitleBox;