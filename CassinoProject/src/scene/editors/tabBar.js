import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const TabBar = ({ tabs, onTabPress }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabPress = (index) => {
        setActiveTab(index);
        if (onTabPress) {
            onTabPress(index);
        }
    };

    return (
        <View style={styles.tabBar}>
            {tabs.map((tab, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.tabItem, index === activeTab && styles.activeTab]}
                    onPress={() => handleTabPress(index)}
                >
                    <Image source={require(`../../../assets/sustainability.png`)} style={styles.image} />
                    <Text style={styles.tabText}>{tab}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        height: 50,
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: 'blue',
    },
    tabText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    image: {
        width: 20,
        height: 20,
    }
});

export default TabBar;
