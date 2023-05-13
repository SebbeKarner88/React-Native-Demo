import React, {useState} from "react";
import {Dimensions, Keyboard, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import InputField from "./InputField";
import ModalPopup from "./ModalPopup";

const NameAgeBox = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{alignItems: 'center'}}>
                <View style={styles.inputBox}>
                    <InputField
                        title='Enter your name'
                        keyType={'default'}
                        value={name}
                        setValue={setName}/>
                    <InputField
                        title='Enter your age'
                        keyType={'numeric'}
                        value={age}
                        setValue={setAge}/>
                    {name !== '' && age !== ''
                        ? <ModalPopup
                            title={'Submit'}
                            text={` Hello ${name}! 
                        
Even though you are ${age} years old, 
you still look good!`}/>
                        : null}
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: 'rgba(0,0,0,0.72)',
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
    }
});

export default NameAgeBox;