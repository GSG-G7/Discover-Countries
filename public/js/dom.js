const input = document.querySelector('.main__input');
const createEle = (element, className) => {
  const domElement = document.createElement(element);
  domElement.classList.add(className);
  return domElement;
};

input.addEventListener('input', () => {
  apiRequest('/API', (data) => {
    const value = input.value.toLowerCase().trim();
    const allCountries = Object.keys(data);
    const specificCountries = allCountries.filter(
      item => item.toLowerCase().indexOf(value) === 0,
    );
    if (value !== '') {
      document.querySelector('.main__results').textContent = '';
      specificCountries.forEach((item) => {
        displayData(item, data[item]);
      });
    }
  });
});

const displayData = (country, cities) => {
  const countryBox = createEle('div', 'main__country');
  const countryLink = createEle('a', 'counrty__link');
  const countryName = createEle('h2', 'country__name');
  countryName.textContent = country;
  countryLink.appendChild(countryName);
  countryBox.appendChild(countryLink);
  document.querySelector('.main__results').appendChild(countryBox);
  countryLink.href = `#${country}`;
  const citiesList = createEle('ul', 'country__cities');
  citiesList.id = `${country}`;

  // Add cities to each countries div
  cities.forEach((city) => {
    const cityItem = createEle('li', 'country__item');
    cityItem.textContent = city;
    citiesList.appendChild(cityItem);
    countryBox.appendChild(citiesList);
  });
};
