import React, { useState } from 'react';
import ShapeGenerator from '../utils/shapeGenerator';
import ImageGenerator from '../utils/imageGenerator';
import { Alert, FlatList, View, Text, StyleSheet, Button } from 'react-native';

const CustomGrid = ({ title, items, onReload }) => {
    let formattedItems = [...items];
    const randomComparison = () => Math.random() - 0.5;

    const [refreshKey, setRefreshKey] = useState(0);

    const renderItem = ({ item }) => (
        <View style={styles.gridItem}>
            {icon()}
        </View>
    );

    const reload = () => {
        formattedItems = formattedItems.sort(randomComparison);
        setRefreshKey(prevKey => prevKey + 1);
    };

    const icon = () => {
        const available = Math.random() < 0.5;

        if (available) {
            return <ShapeGenerator size={20} />;
        } else {
            return <ImageGenerator />;
        }
    };
    
    const exposedFunctions = {
        reload,
    };
    
    onReload(exposedFunctions);

    return (
        <View style={styles.grid}>
            <Text> {title} </Text>
            <FlatList
                key={refreshKey}
                style={{
                    backgroundColor: "rgba(0, 0, 255, 0.2)",
                }}
                data={formattedItems}
                numColumns={5}
                renderItem={renderItem}
                contentContainerStyle={styles.gridContainer}
            />            
        </View>
    );
};

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

export default CustomGrid;
