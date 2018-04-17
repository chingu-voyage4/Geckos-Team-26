function handleResponse(response) {
  return response.json().then(json => {
    if (response.ok) {
      return json;
    }
    return Promise.reject(json);
  });
}

const postData = (postRoute, options) =>
  fetch(postRoute, options).then(handleResponse);

export default postData;
