const postData = payload =>
  new Promise((resolve, reject) => {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: `accesstoken=${payload.accessToken}&email=${
        payload.user.email
      }&imgurl=${payload.user.imgUrl}&name=${payload.user.name}`
    };
    fetch("/oauth/google", options)
      .then(res => res.json())
      .then(json => {
        resolve(json);
      })
      .catch(error => {
        reject(error);
      });
  });

export default postData;
