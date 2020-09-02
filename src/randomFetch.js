import { showLoading } from './toggleLoading.js';

export default async (URL) => {
  showLoading();
  const response = await fetch(URL);
  let data = await response.json();
  data = data.drinks[0];
  return data;
};
