import refs from './refs';
const fetchCountries = searchQuery => {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  refs.articlesContainer.innerHTML = '';
  refs.searchQuery.textContent = '';
  refs.articleIfOne.innerHTML = '';

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      return data;
    })

    .catch(error => console.log(error));
};
export default fetchCountries;
