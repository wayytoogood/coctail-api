const setDrink = (section) => {
  section.addEventListener('click', (e) => {
    const idKeeper = e.target.closest('.cocktail');
    if (idKeeper) {
      const id = idKeeper.dataset.id;
      localStorage.setItem('drink', id);
    }
  });
};

export default setDrink;
