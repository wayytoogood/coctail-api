import fetchDrink from './fetchDrinks.js';
import get from './getElement.js';
import { showLoading } from './toggleLoading.js';
import { hideLoading } from './toggleLoading.js';

const displayDrink = async (URL) => {
  const id = localStorage.getItem('drink');
  if (!id) {
    window.location.replace('index.html');
  } else {
    let data = await fetchDrink(URL);
    data = data[0];
    //display
    const { strDrink: name, strInstructions: desc, strDrinkThumb: img } = data;

    const image = get('.drink-img');
    const title = get('.drink-name');
    const description = get('.drink-desc');
    const ingredients = get('.drink-ingredients');

    document.title = name;
    image.src = img;
    title.textContent = name;
    description.textContent = desc;

    const list = [
      data.strIngredient1,
      data.strIngredient2,
      data.strIngredient3,
      data.strIngredient4,
      data.strIngredient5,
    ];
    hideLoading();
    ingredients.innerHTML = list
      .map((item) => {
        if (!item) return;
        return `<li><i class="far fa-check-square"></i>${item}</li>`;
      })
      .join('');
  }
};

export default displayDrink;
