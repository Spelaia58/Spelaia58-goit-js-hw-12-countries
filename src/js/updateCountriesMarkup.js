function updateCountriesMarkup(data, list, template) {
  const markup = template(data);
  list.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;
