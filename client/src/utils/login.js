const login = (res, props) => {
  const jsonResponse = res;
  if (jsonResponse.userData) {
    localStorage.setItem("token", jsonResponse.token);
    // localStorage.setItem("user", JSON.stringify(jsonResponse.userData));
    res.userData.token = jsonResponse.token;
    props.updateUser(res.userData);
    props.updateIsLoggedIn(true);
  }
};

export default login;
