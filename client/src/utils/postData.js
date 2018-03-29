const postData = options =>
  new Promise((resolve, reject) => {
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
