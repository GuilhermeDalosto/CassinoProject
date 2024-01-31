import React from 'react';
import Circle from './circle';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const CustomListRow = ({title, items}) => {        
    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Circle color='yellow' />
        </View>
    );

    return (
        <View style = {styles.list}>
            <Text>{title}</Text>

            <FlatList                
                data={items}
                numColumns={1}
                horizontal={true}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        margin: 10
    },
    listContainer: {
        justifyContent: 'space-between',
        padding: 16,
        gap: 12,
    },
    listItem: {
        width: '18%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
    },
});

export default CustomListRow