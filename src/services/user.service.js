import axios from 'axios';
import authHeader from './auth-header';

const API_URL = "https://hedera-api.herokuapp.com/api/v1.0/";
//const API_URL = "http://localhost:2999/api/v1.0/";

class UserService {

  getPublicContent() {
    return axios.get(API_URL, { headers: authHeader() });
  }

  // getUserBoard() {
  //   return axios.get(API_URL + 'user', { headers: authHeader() });
  // }

  // getModeratorBoard() {
  //   return axios.get(API_URL + 'mod', { headers: authHeader() });
  // }

  // getAdminBoard() {
  //   return axios.get(API_URL + 'admin', { headers: authHeader() });
  // }
}

export default new UserService();
