import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import ApiService from './src/services/ApiService';

const TestAPI = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ApiService.get('/endpoint');
        setData(result);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
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
