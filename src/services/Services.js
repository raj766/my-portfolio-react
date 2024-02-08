import axios from "axios";

class ApiService {
  constructor() {

    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL, // Replace with your API base URL
      timeout: 10000, // Set a reasonable timeout
      // You can also add headers, authentication, interceptors, etc. here
    });
  }

  async fetchCategory() {
    try {
      const response = await this.instance.get('/api/category-list');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async fetchPortfolio(ids) {
    try {
      const response = await this.instance.get('/api/portfolio-list?catid='+ids);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  async fetchPortfolioDetails(ids) {
    try {
      const response = await this.instance.get('/api/portfolio-details?portid='+ids);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async createPost(postData) {
    try {
      const response = await this.instance.post('/posts', postData);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // Define other API methods as needed
}

export default new ApiService();
