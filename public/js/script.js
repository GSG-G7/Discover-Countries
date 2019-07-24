const apiRequest = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(data);
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
};

const filterData = (arr, value) => {
  const specificCountries = arr.filter((item) => {
    console.log(item.toLowerCase());
    return item.toLowerCase().indexOf(value) === 0;
  });

  return specificCountries;
};

if (typeof module !== 'undefined') {
  module.exports = filterData;
}
