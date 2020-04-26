import articlesTpl from '../template/articles.hbs';
import articlesTplIfOne from './template/articlesIfOne.hbs';

function updateCountriesMarkup(data) {
  const markup = articlesTpl(data);
  refs.articlesContainer.insertAdjacentHTML('beforeend', markup);
}
export default updateCountriesMarkup;
