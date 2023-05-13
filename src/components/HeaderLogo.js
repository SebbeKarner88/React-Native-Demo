import React from "react";
import {Image, TouchableOpacity, StyleSheet, View} from "react-native";

const HeaderLogo = ({navigation, path}) => {

    return <TouchableOpacity
        onPress={() => navigation.navigate('Home')}>
        <View
            height={75}
            width={75}
            style={styles.logo}>
            <Image
                style={styles.logoPic}
                source={require('../../assets/react-icon.webp')}
            />
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    logo: {
        backgroundColor: "#fff",
        marginLeft: 10,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'rgb(95,196,228)',
    },
    logoPic: {
        marginTop: 2,
        marginLeft: 1,
        height: 66,
        width: 69,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4939ff',
    }
});

export default HeaderLogo;