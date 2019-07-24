const input = document.querySelector('.main__input');

input.addEventListener('input', () => {

  apiRequest('/API', (data) => {
    const value = input.value;
    const allCountries = Object.keys(data);

    const specificCountries = allCountries.filter((item) => {

      return item.toLowerCase().indexOf(value) === 0;
    });

    if (value !== "") {
        specificCountries.forEach((item) => {
        collectData(item, data[item]);
      })
    }

  });
})


const collectData = (country, cities)=>{
    
}
