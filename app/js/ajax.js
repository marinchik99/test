postRequest = (data) => {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.responseType = "json";
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = () => {
      if (xhr.status < 400) {
        res(xhr.response);
      } else {
        rej(xhr.response);
      }
    };
    xhr.send(JSON.stringify(data));
  });
}