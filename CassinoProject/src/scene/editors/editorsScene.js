import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Stick = ({ color }) => (
    <View style={[styles.stick, { backgroundColor: color }]} />
);

const EditorsScene = () => {
    const [data, setData] = useState([]);
    const [gridData, setGridData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        // Dados para o grid
        const gridJsonData = ['Últimas notícias', 'Mais lidas', 'Opinião', 'Podcasts']
        setGridData(gridJsonData);

        // Dados para a lista
        const listJsonData = ['Política', 'Economia', 'Empreendedorismo', 'Tecnologia', 'Internacional', 'Brasil',
            'São Paulo', 'Estadão Verifica', 'Educação', 'Ciência', 'Sustentabilidade', 'Esportes', 'Saúde', 'Life/Style',
            'Cultura', 'Emais', 'Paladar', 'Viagem']
        setData(listJsonData);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item}>
            <Stick color={'rgb(37, 117, 232)'} />
            <Image source={require('../../../assets/sustainability.png')} style={styles.image} />
            <Text style={{
                fontWeight: 'bold',
                fontSize: 17,                
            }}>{item}</Text>
        </TouchableOpacity>
    );

    const renderGridItem = ({ item }) => (
        <TouchableOpacity style={styles.gridItem}>
            <Stick color={'rgb(37, 117, 232)'} />
            <Text style={{
                fontWeight: 'bold',
                fontSize: 16,
                position: 'absolute',
                left: 14,
                bottom: 14,
            }}>{item}</Text>
            <Image source={require('../../../assets/sustainability.png')} style={styles.gridImage} />
        </TouchableOpacity>
    );

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <Text style={styles.header}>Editorias</Text>
                <FlatList
                    data={gridData}
                    renderItem={renderGridItem}
                    scrollEnabled={false}
                    // keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                />
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    scrollEnabled={false}
                // keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 40,
        color: 'rgb(37, 117, 232)',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        width: 345,
        height: 61,
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(219 226 235)',
    },
    image: {
        width: 20,
        height: 20,
        margin: 10,
    },
    gridItem: {
        // flex: 1,
        // alignItems: 'left',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        width: 167,
        height: 88,
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    gridImage: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: 15,
        right: 15,
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    stick: {
        width: 3,
        height: 20,
        marginRight: 10,
    },
});

export default EditorsScene;
