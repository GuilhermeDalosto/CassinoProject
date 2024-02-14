import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import ApiService from './src/services/ApiService';

const TestAPI = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ApiService.get('/noticias');
        setData(result);
      } catch (error) {
        console.error('Failed at getting data:', error);
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
