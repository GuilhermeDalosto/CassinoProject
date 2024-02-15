import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';

const EditorsScene = () => {
  const [data, setData] = useState([]);
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Simulando dados da API
      const jsonData = Array.from({ length: 12 }, (_, index) => ({
        id: index.toString(),
        title: `Item ${index + 1}`,
        imageUrl: `https://via.placeholder.com/150?text=Image${index + 1}`,
      }));
      setData(jsonData);

      // Dados para o grid
      const gridJsonData = Array.from({ length: 4 }, (_, index) => jsonData[index]);
      setGridData(gridJsonData);
    } catch (error) {
      console.error('Erro ao buscar os dados da API:', error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderGridItem = ({ item }) => (
    <TouchableOpacity style={styles.gridItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.gridImage} />
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Grid com 4 elementos</Text>
      <FlatList
        data={gridData}
        renderItem={renderGridItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
      <Text style={styles.header}>Listagem com 12 elementos</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  gridItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  gridImage: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
});

export default EditorsScene;
