async function LoginUser(username, password) {
  const response = await fetch(
    "https://att-api.azurewebsites.net/api/Auth/Login",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }
  );

  console.log(response);

  if (!response.ok) {
    throw new Error("Failed to login");
  }

  return response.json();
}

export default LoginUser;
