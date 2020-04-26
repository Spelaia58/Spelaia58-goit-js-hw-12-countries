import './styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from '../src/js/fetchCountries';
import updateCountriesMarkup from './js/updateCountriesMarkup';

const refs = {
  searchQuery: document.querySelector('#js-input'),
  articlesContainer: document.querySelector('#js-dropdown'),
};

refs.searchQuery.addEventListener(
  'input',
  debounce(() => {
    refs.articlesContainer.innerHTML = '';

    fetchCountries(refs.searchQuery, 500).then(updateCountriesMarkup);
  }),
);
