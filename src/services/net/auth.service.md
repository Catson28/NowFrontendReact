
```tsx
import http from "./base/http-common";


class AuthService {
  login(email: string, password: string) {
    // return http.post("api/auth/signin", { email, password }).then(response => {
    return http.post("auth/login", { email, password }).then(response => {
      if (response.data.accessToken) {
        // localStorage.setItem("api/auth/user", JSON.stringify(response.data));
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(JSON.stringify(response.data));
      return response.data;

    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username: string, email: string, password: string) {
    return http.post("users", { username, email, password });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}

const AuthServiceInstance = new AuthService();
export default AuthServiceInstance;
```