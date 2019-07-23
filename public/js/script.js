const apiRequest = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange(() => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = (JSON.stringify(xhr.responseText));
      callback(data);
    }
  })
  xhr.open('GET', url, true);
  xhr.send();
}

apiRequest('GET', '/API', (res) => {
  console.log(res);
})