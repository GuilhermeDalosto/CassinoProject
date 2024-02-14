import httpClient from '../adapters/HttpClient';

const ApiService = {
  async get(endpoint, params) {
    try {
      const response = await httpClient.get(endpoint, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async post(endpoint, data) {
    try {
      const response = await httpClient.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async put(endpoint, data) {
    try {
      const response = await httpClient.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async delete(endpoint) {
    try {
      const response = await httpClient.delete(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ApiService;