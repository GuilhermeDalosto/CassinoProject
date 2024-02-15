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
      <Image source={require(`../../assets/lula.jpg`)} style={styles.newsImage} />
      <Image source={{ uri: `https://i.pravatar.cc/150?u=${item.userId}` }} style={styles.image} />
      <Text style={styles.editory}>POLÍTICA</Text>
      <Text style={styles.columnist}>Antonio Penteado</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>15/08/2023 | 20h00</Text>
    </View>
  );

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
    // Aqui você pode implementar a lógica para atualizar os dados da lista com base na aba selecionada
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Colunistas</Text>
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
    backgroundColor: 'rgba(0,0,0,0.05)',
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
  header: {
    fontSize: 40,
    color: 'rgb(37, 117, 232)',
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
},
  selectedTab: {
    borderBottomWidth: 2,
    borderColor: 'blue',
  },
  tabText: {
    fontSize: 16,
  },
  item: {    
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 340,
  },
  columnist: {
    fontSize: 20,
    fontWeight: 'bold',    
    color: 'rgb(37, 117, 232)',
    position: 'absolute',
    textAlign: 'center',
    top: 90,
    bottom: 0,
    left: 60,
    right: 0,

  },
  editory: {
    fontSize: 11,
    fontWeight: 'bold',
    color: 'rgb(37, 117, 232)',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'semibold'
  },
  body: {
    fontSize: 12,
    fontWeight: 'regular',
    marginTop: 10,
    color: 'rgb(93 116 142)'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 4,
    borderColor: 'rgb(37, 117, 232)',
  },
  newsImage: {
    width: 345,
    height: 176,
    position: 'absolute',
    left: 0,
    top: -100
  },
});

export default MyComponent;
