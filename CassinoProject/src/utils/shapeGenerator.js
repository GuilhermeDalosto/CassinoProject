import React from 'react';
import { View, StyleSheet } from 'react-native';

const ShapeGenerator = ({ size, available }) => {    
    const color = (available === true) ? 'green' : 'blue'
    const formattedSize = (available === true) ? size : size * 2

    const styles = StyleSheet.create({
        base: {
            width: formattedSize,
            height: formattedSize,
            backgroundColor: color,
        },
        circle: {
            borderRadius: formattedSize / 2,
        },
        triangle: {
            borderLeftWidth: formattedSize / 2,
            borderRightWidth: formattedSize / 2,
            borderBottomWidth: formattedSize,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: color,
            backgroundColor: 'transparent'
        },
        square: {
            borderRadius: 0,
        },
    });

    const render = () => {
        const random = Math.floor(Math.random() * 3) + 1;
        switch (random) {
            case 1:
                return <View style={[styles.base, styles.circle]} />;
            case 2:
                return <View style={[styles.base, styles.triangle]} />;
            case 3:
                return <View style={[styles.base, styles.square]} />;
            default:
                return null;
        }
    };

    return render();
};

export default ShapeGenerator;
