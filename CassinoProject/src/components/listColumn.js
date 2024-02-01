import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import ImageGenerator from '../utils/imageGenerator';

const CustomListColumn = ({ items }) => {
    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <ImageGenerator size={20}/>
        </View>
    );

    return (
        <View style={styles.list}>
            <FlatList
                style={{ backgroundColor: 'rgba(1,1,1,0.11)' }}
                data={items}
                numColumns={1}                
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        margin: 20
    },
    listContainer: {
        justifyContent: 'space-between',
        padding: 6,
        gap: 12,
    },
    listItem: {                
        margin: 4,
    },
});

export default CustomListColumn