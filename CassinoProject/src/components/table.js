import React from 'react';
import CustomListColumn from './listColumn';
import { View, StyleSheet } from 'react-native';

const Table = () => {

    const mock = Array.from({ length: 10 }, () => Math.floor(Math.random() * 20) + 1);

    return (
        <View style={styles.table}>
            <View style={styles.column}>
                <CustomListColumn items={[...mock].sort(() => Math.random() - 0.5)} />
                <CustomListColumn items={[...mock].sort(() => Math.random() - 0.5)} />
                <CustomListColumn items={[...mock].sort(() => Math.random() - 0.5)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    table: {
        marginTop: 40,
        margin: 20,
        width: 230,
        height: 140,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'yellow'
    },

    column: {

        flexDirection: 'row'
    }

})

export default Table