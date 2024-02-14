import React, { useState } from 'react';
import ImageGenerator from '../utils/imageGenerator';
import { calculateMoney } from '../utils/moneyCalculator';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const CustomGrid = ({ items, onReload }) => {
    let formattedItems = [...items];
    let animals = [];

    const [refreshKey, setRefreshKey] = useState(0);
    const [moneyText, setMoneyText] = useState('');

    const renderItem = ({ item }) => (
        <View style={styles.gridItem}>
            {icon(item)}
        </View>
    );

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        
        return array
      };

    const reload = () => {        
        formattedItems = shuffleArray(formattedItems)
        setRefreshKey(prevKey => prevKey + 1);        
        setMoneyText(`${calculateMoney(formattedItems)}`);
    };

    const icon = (item) => {
        return <ImageGenerator value={item} />;
    };

    const exposedFunctions = {
        reload,
    };

    onReload(exposedFunctions);

    return (
        <View style={styles.grid}>
            <Text>{moneyText}</Text>
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
        margin: 10,
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 10,
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
