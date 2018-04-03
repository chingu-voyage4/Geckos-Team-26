const login = (res, props) => {
  const jsonResponse = res;
  if (jsonResponse.userData) {
    sessionStorage.setItem("token", jsonResponse.token);
    sessionStorage.setItem("user", JSON.stringify(jsonResponse.userData));
    props.updateUser(res.userData);
    props.updateIsLoggedIn(true);
  }
};

export default login;
