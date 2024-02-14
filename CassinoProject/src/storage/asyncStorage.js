import AsyncStorage from '@react-native-async-storage/async-storage';

// Função para salvar dados
async function saveData(key, value) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('Data saved successfully');
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

// Função para recuperar dados
async function getData(key) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      console.log('No data found');
      return null;
    }
  } catch (error) {
    console.error('Error getting data:', error);
    return null;
  }
}

// Função para excluir dados
async function deleteData(key) {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Data deleted successfully');
  } catch (error) {
    console.error('Error deleting data:', error);
  }
}

// Uso
const key = 'myDataKey';
const data = { name: 'John', age: 30 };

// Salvar dados
saveData(key, data);

// Recuperar dados
getData(key).then((retrievedData) => {
  console.log('Retrieved data:', retrievedData);
});

// Excluir dados
deleteData(key);
