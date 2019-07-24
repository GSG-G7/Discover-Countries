const input = document.querySelector(".main__input");
const { value } = input;

const filter = (data, value) => {
  const allCountries = Object.keys(data);
  const specificCountries = allCountries.filter(
    item => item.toLowerCase().indexOf(value) === 0
  );

  if (value !== "") {
    specificCountries.forEach(item => {
      collectData(item, data[item]);
    });
  }
};
input.addEventListener("input", () => {
  apiRequest("/API", filter);
});
const collectData = (country, cities) => {
  console.log(country, cities);
};
