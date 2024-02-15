import React from 'react';
import { View, StyleSheet } from 'react-native';

const ShapeGenerator = ({ size }) => {
    const styles = StyleSheet.create({
        base: {
            width: size,
            height: size,
            backgroundColor: 'green',
        },
        circle: {
            borderRadius: size / 2,
        },
        triangle: {
            borderLeftWidth: size / 2,
            borderRightWidth: size / 2,
            borderBottomWidth: size,
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'green',
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
