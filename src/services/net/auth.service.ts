import http from "./base/http-common";

class AuthService {
  register(username: string, email: string, password: string) {
    return http.post("signup", {
      username,
      email,
      password,
    });
  }

  login(username: string, password: string) {
    return http
      .post("auth/login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}

// export default new AuthService();
const AuthServiceInstance = new AuthService();
export default AuthServiceInstance;
