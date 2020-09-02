import get from './getElement.js';
import { hideLoading } from './toggleLoading.js';

export default async (data) => {
  const title = get('.title');
  const section = get('.section-center');
  if (!data) {
    hideLoading();
    title.textContent = 'Sorry, there is no match with your query!';
    section.innerHTML = null;
    return;
  } else {
    const searchedDrinks = data
      .map((item) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = item;
        return `<a href="drink.html">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`;
      })
      .join('');
    hideLoading();
    section.innerHTML = searchedDrinks;
    return section;
  }
};
