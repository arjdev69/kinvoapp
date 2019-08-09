import Config from 'react-native-config';
import axios from 'axios';

const api = axios.create({
  baseURL: Config.REACT_APP_API_URL,
});

export default api;
