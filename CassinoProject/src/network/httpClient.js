import axios from 'axios';

const BASE_URL = 'https://www.estadao.com.br';

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export default httpClient;