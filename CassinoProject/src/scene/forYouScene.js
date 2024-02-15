import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const ForYouScene = () => {
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
          style={[styles.tab, selectedTab === 'Para Você' && styles.selectedTab]}
          onPress={() => handleTabPress('Para Você')}
        >
          <Text style={styles.tabText}>Para Você</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Notícias Salvas' && styles.selectedTab]}
          onPress={() => handleTabPress('Notícias Salvas')}
        >
          <Text style={styles.tabText}>Notícias Salvas</Text>
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
    backgroundColor: 'light gray',
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
    backgroundColor: 'lightblue',
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

export default ForYouScene;
