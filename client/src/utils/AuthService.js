import decode from "jwt-decode";

export default class AuthService {
  getToken() {
    return localStorage.getItem("token");
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  isTokenValid(token) {
    // Checks if token is still valid
    return !!token && !this.isTokenExpired(token);
  }

  getProfile(token) {
    return decode(token);
  }
}
