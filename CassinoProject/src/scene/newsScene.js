import React from 'react';

import { StyleSheet, FlatList } from 'react-native';
import ApiService from '../network/apiService';

const NewsScene = () => {
    const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiService();
        setImages(data);
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      }
    };

    fetchData();
  }, []);

    const renderItem = ({ item }) => (
        <View style={styles.imageContainer}>
            <Image
                style={styles.image}
                source={{ uri: item.uri }}
            />
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
    },
});

export default NewsScene;
