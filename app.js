import presentDrink from './src/presentDrinks.js';
import './src/searchForm.js';
import randomPresentDrinks from './src/randompresentDrinks.js';
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

window.addEventListener('DOMContentLoaded', randomPresentDrinks(URL));
