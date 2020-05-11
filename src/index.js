import './styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import updateCountriesMarkup from './js/updateCountriesMarkup';
import articlesTpl from './template/article.hbs';
import articlesTplIfOne from './template/articlesIfOne.hbs';
import refs from './js/refs';

import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';

defaultModules.set(PNotifyMobile, {});

refs.searchQuery.addEventListener(
  'input',
  debounce(event => {
    const searchQuery = event.target.value.trim();

    fetchCountries(searchQuery).then(data => {
      if (!data) {
        return;
      }

      if (data.length > 10) {
        return error({
          text: 'Too many matches found. Please enter a more specific query!',
        });
      }

      if (data.length >= 2 && data.length <= 10) {
        updateCountriesMarkup(data, refs.articlesContainer, articlesTpl);
      }

      if (data.length === 1) {
        updateCountriesMarkup(data, refs.articleIfOne, articlesTplIfOne);
      }
    });
  }, 500),
);
