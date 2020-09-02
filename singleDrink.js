import displayDrink from './src/displaySingleDrink.js';
let URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
URL = URL + localStorage.getItem('drink');

window.addEventListener('DOMContentLoaded', displayDrink(URL));
