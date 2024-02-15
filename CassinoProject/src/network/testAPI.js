import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import ApiService from './src/services/ApiService';

const TestAPI = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiRequest('images'); // Chama a função genérica para buscar as imagens
        setImages(data);
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};

export default TestAPI;
