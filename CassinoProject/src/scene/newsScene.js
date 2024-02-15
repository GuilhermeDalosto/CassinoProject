import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [selectedTab, setSelectedTab] = useState('Todos');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: `https://i.pravatar.cc/150?u=${item.userId}` }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    // Aqui você pode implementar a lógica para atualizar os dados da lista com base na aba selecionada
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Todos' && styles.selectedTab]}
          onPress={() => handleTabPress('Todos')}
        >
          <Text style={styles.tabText}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Seguindo' && styles.selectedTab]}
          onPress={() => handleTabPress('Seguindo')}
        >
          <Text style={styles.tabText}>Seguindo</Text>
        </TouchableOpacity>
      </View>
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
    paddingTop: 22,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    paddingVertical: 10,
  },
  tab: {
    paddingHorizontal: 20,
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderColor: 'blue',
  },
  tabText: {
    fontSize: 16,
  },
  item: {
    backgroundColor: 'lightgray',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
  body: {
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default MyComponent;
