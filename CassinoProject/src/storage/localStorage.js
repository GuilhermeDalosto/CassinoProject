import { writeFile, readFile, unlink } from 'react-native-fs';

// Função para salvar dados
async function saveData(filePath, data) {
  try {
    await writeFile(filePath, JSON.stringify(data), 'utf8');
    console.log('Data saved successfully');
  } catch (error) {
    console.error('Error saving data:', error);
  }
}

// Função para recuperar dados
async function getData(filePath) {
  try {
    const fileContent = await readFile(filePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    console.error('Error getting data:', error);
    return null;
  }
}

// Função para excluir dados
async function deleteData(filePath) {
  try {
    await unlink(filePath);
    console.log('Data deleted successfully');
  } catch (error) {
    console.error('Error deleting data:', error);
  }
}

// Uso
const filePath = `${RNFS.DocumentDirectoryPath}/data.json`;
const data = { name: 'John', age: 30 };

// Salvar dados
saveData(filePath, data);

// Recuperar dados
getData(filePath).then((retrievedData) => {
  console.log('Retrieved data:', retrievedData);
});

// Excluir dados
deleteData(filePath);
