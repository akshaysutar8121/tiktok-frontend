import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tiktok8860.herokuapp.com/',
});
export default instance;