import axios from "axios";

const API_URL = "https://hedera-api.herokuapp.com/api/v1.0/";
//const API_URL = "http://localhost:2999/api/v1.0/";

class AuthService {

  login(username, password) {

    console.log('username: ' + username);
    console.log('password:' + password);

    return axios.post(API_URL + "login", {
      username,
      password
    })
      .then(response => {
        console.log('login response: ' + JSON.stringify(response.headers.authorization));
        if (response.headers.authorization) {
          localStorage.setItem("user", JSON.stringify(response.headers.authorization));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "user", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
