const login = res => {
  const jsonResponse = res;
  if (jsonResponse.userData) {
    sessionStorage.setItem("token", jsonResponse.token);
    sessionStorage.setItem("user", JSON.stringify(jsonResponse.userData));
  }
};

export default login;
