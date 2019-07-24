const apiRequest = (url, callback) => {
  const xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.onreadystatechange = (() => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = (JSON.stringify(xhr.responseText));
      callback(data);
    }
  })
  xhr.open('GET', url, true);
  xhr.send();
};

apiRequest('/API', (res) => {
  console.log(res);
});