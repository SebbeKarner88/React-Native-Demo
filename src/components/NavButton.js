import React from "react";
import {Text, TouchableOpacity, StyleSheet} from "react-native";

const NavButton = ({navigation, path, label}) => {

    return <TouchableOpacity
        onPress={() => navigation.navigate(path)}>
        <Text
            style={styles.Button}>
            {label}
        </Text>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    Button: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5fc4e4'
    }
});

export default NavButton;