import React from 'react';
import Circle from './circle';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const CustomGrid = ({title, items}) => {
    const renderItem = ({ item }) => (
        <View style={styles.gridItem}>
            <Circle color='green'/>
        </View>
    );

    const styles = StyleSheet.create({
        grid: {
            margin: 10
        },
        gridContainer: {
            justifyContent: 'space-between',
            padding: 16,
            gap: 12,
        },
        gridItem: {
            width: '18%',
            aspectRatio: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 4,
        },
    });            

    return (
        <View style = {styles.grid}>
            <Text> {title} </Text>
            <FlatList
                style={{ 
                    backgroundColor: "rgba(0, 0, 255, 0.2)",                    
                }}
                data={items}
                numColumns={5}
                renderItem={renderItem}
                contentContainerStyle={styles.gridContainer}
            />
        </View>
    )


}

export default CustomGrid;