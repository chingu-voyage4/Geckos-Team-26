const postData = (postRoute, options) =>
  new Promise((resolve, reject) => {
    fetch(postRoute, options)
      .then(res => res.json())
      .then(json => {
        resolve(json);
      })
      .catch(error => {
        reject(error);
      });
  });

export default postData;
