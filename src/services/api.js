import axios from 'axios';

export default class ApiService {
  constructor(value, page) {
    this.value = value;
    this.page = page;
    this.perPage = 12;
    this.key = '39874943-ba671930c3dcb7d11922b6a96';
  }

  async fetchImg() {
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${this.value}&page=${this.page}&key=${this.key}&image_type=photo&orientation=horizontal&per_page=${this.perPage}`
      );

      this.incrementPage();
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
