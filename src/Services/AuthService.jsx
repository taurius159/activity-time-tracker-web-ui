const API_URL = "https://att-api.azurewebsites.net/api";

class AuthService {
  async login(email, password) {
    const response = await fetch(`${API_URL}/Auth/Login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error(
        "Login failed. Check your username or password and try again."
      );
    }
    const data = await response.json();
    return data.jwtToken;
  }
}

export default new AuthService();
