import fetchDrink from './fetchDrinks.js';
import fetchDrinks from './fetchDrinks.js';
import displayDrink from './displayDrinks.js';
import setDrink from './setDrink.js';

export default async (URL) => {
  //fetch data
  const data = await fetchDrinks(URL);
  //display data
  const section = await displayDrink(data);

  setDrink(section);
};
