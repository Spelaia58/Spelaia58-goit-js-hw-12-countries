const fetchCountries = searchQuery => {
  const searchParams = searchQuery.value.trim();
  const url = `https://restcountries.eu/rest/v2/name/${searchParams}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => updateCountriesMarkup(data))

    .catch(error => console.log(error));
};
export default fetchCountries;
