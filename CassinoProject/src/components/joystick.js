import React from 'react';
import Circle from './circle';
import Table from './table';
import { StyleSheet, TouchableOpacity, View, Alert } from 'react-native';

const JoyStick = () => {

    const onPressButton = () => {
        Alert.alert('press button');
    }

    return (
        <View style={styles.joystick}>

            <Table/>
            <TouchableOpacity onPress={onPressButton}>
                <View style={styles.button}>
                    <Circle color='red' size={60} />                    
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    joystick: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 260,
        padding: 20,
        backgroundColor: 'rgba(252,176,0,1)'
    },

    button: {
        // flexDirection: 'row',
        // justifyContent: 'flex-end'
    }

})

export default JoyStick