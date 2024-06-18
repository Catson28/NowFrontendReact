import http from "./base/http-common";


class AuthService {
  login(username: string, password: string) {
    return http.post("api/auth/signin", { username, password }).then(response => {
      if (response.data.accessToken) {
        localStorage.setItem("api/auth/user", JSON.stringify(response.data));
      }
      return response.data;
    });
  }

  logout() {
    localStorage.removeItem("api/auth/user");
  }

  register(username: string, email: string, password: string) {
    return http.post("api/auth/signup", { username, email, password });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("api/auth/user");
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}

const AuthServiceInstance = new AuthService();
export default AuthServiceInstance;
