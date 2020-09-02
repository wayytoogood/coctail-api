import get from './getElement.js';
import presentDrink from './presentDrinks.js';

const form = get('.search-form');
const input = get('[name="drink"]');
const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

form.addEventListener('keyup', (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  presentDrink(`${baseURL}${value}`);
});
