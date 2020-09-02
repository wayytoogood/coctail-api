import fetchDrink from './randomFetch.js';
import displayDrink from './displayDrinks.js';
import setDrink from './setDrink.js';

export default async (URL) => {
  //fetch data
  let totalDrinks = [];
  //get total of 12 random drink
  for (let i = 0; i < 12; i++) {
    const currentDrink = await fetchDrink(URL);
    totalDrinks.push(currentDrink);
  }
  //display drinks
  const section = await displayDrink(totalDrinks);
  setDrink(section);
};
