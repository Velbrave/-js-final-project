import refs from './JS/refs';
import Storage from './JS/storage';
import Plagination from './JS/plagination';
import cocktailMarkup from './JS/cocktailMarkup';
import ingredientModalMarkup from './JS/ingredientModalMarkup';
import {
  listenLearnMoreBtns,
  currentModalID,
  currentIngredientModal,
  createIngredientDetails,
} from './JS/learnMoreBtns';
import favIngredMarkup from './JS/favIngredientsMarkup';

const plagination = new Plagination();
const storage = new Storage();
let modalId = '';
refs.modalAddDrink.addEventListener('click', addDrinkModal);
refs.modalAddIngredient.addEventListener('click', addIngredientModal);
refs.modalAddIngredient.children[0].textContent = 'Remove from favorite';
if (true) {
  //  тут має бути if local storage ('page')==1 .... і т. д.
  swhowCocktailsPage();
} else {
  swhowIngredientsPage();
}

function swhowCocktailsPage() {
  refs.favIngredientsTitle.classList.add('visually-hidden');
  if (storage.hasDrinks()) {
    createFavCocktailsList();
  } else {
    showFavCocktailErr();
  }
}
function swhowIngredientsPage() {
  refs.favCocktailsTitle.classList.add('visually-hidden');
  if (storage.hasIngredients()) {
    createFavIngredientsList();
  } else {
    showIngredientsErr();
  }
}
function createFavCocktailsList() {
  const numberOfItems = plagination.itemsPerPage();
  const storageCocktails = localStorage.getItem('cocktails');
  const savedDrinks = JSON.parse(storageCocktails);
  if (savedDrinks.length > 9) {
    createPlaginationList(savedDrinks.length);
    refs.plagination.classList.remove('visually-hidden');
  }
  savedDrinks.map((el, index) => {
    if (
      index >= (plagination.currentPage - 1) * numberOfItems &&
      index < plagination.currentPage * numberOfItems
    ) {
      refs.mainCocktailsList.insertAdjacentHTML(
        'beforeend',
        cocktailMarkup(el)
      );

      const favDrink = document.querySelector(`[id="${el.idDrink}"]`);
      favDrink.addEventListener('click', addDrink);
      const useHtml = refs.iconHeart.innerHTML;
      const svg = favDrink.children[1];
      svg.innerHTML = useHtml;
      listenLearnMoreBtns(el);
    }
  });
}
// ----------------------------------------------------------
function createFavIngredientsList() {
  const numberOfItems = plagination.itemsPerPage();
  const storageIngredients = localStorage.getItem('ingredients');
  const savedIngredients = JSON.parse(storageIngredients);
  if (savedIngredients.length > 9) {
    createPlaginationList(savedIngredients.length);
    refs.plagination.classList.remove('visually-hidden');
  }
  savedIngredients.map((el, index) => {
    if (
      index >= (plagination.currentPage - 1) * numberOfItems &&
      index < plagination.currentPage * numberOfItems
    ) {
      refs.favIngredientsList.insertAdjacentHTML(
        'beforeend',
        favIngredMarkup(el)
      );

      const favIngred = document.querySelector(`[id="${el.strIngredient}"]`);
      favIngred.addEventListener('click', addIngredient);
      const useHtml = refs.iconHeart.innerHTML;

      const svg = favIngred.children[1];
      svg.innerHTML = useHtml;
      // ingredientDetailsBtn(el);
      const ingredientDetailsBtns = document.querySelector(
        `[id="${1 + el.strIngredient}"]`
      );

      ingredientDetailsBtns.addEventListener('click', showModalIngregients);
    }
  });
}
function showModalIngregients(e) {
  let ingredientModalName = e.currentTarget.id.slice(1);
  modalId = ingredientModalName;
  refs.ingredientMOdal.classList.remove('visually-hidden');
  const ingredientsStorage = localStorage.getItem('ingredients');
  const arr = JSON.parse(ingredientsStorage);
  const ingred = arr.find(el => el.strIngredient == ingredientModalName);

  const ingredientDetails = createIngredientDetails(ingred);
  refs.ingredientMOdalContent.innerHTML = ingredientModalMarkup(
    ingred,
    ingredientDetails
  );
}
// function ingredientDetailsBtn() {
//   const ingredientDetailsBtns = document.querySelectorAll('learn-more-ingred');
// }
function addDrink(e) {
  storage.toggleDrink(e.currentTarget.id);
  if (e.currentTarget.children[0].textContent == 'Add to') {
    e.currentTarget.children[0].textContent = 'Remove';
  } else {
    e.currentTarget.children[0].textContent = 'Add to';
  }
  e.currentTarget.children[1].classList.toggle('icon-heart-not-active');
}

function showIngredientsErr() {
  console.log('no items');
  refs.favIngredientsErr.classList.remove('visually-hidden');
}
function showFavCocktailErr() {
  refs.favCocktailsErr.classList.remove('visually-hidden');
}
function addDrinkModal(e) {
  if (e.target.textContent === 'Add to favorite') {
    e.target.textContent = 'Remove from favorite';
  } else {
    e.target.textContent = 'Add to favorite';
  }

  const btn = document.querySelector(`[id="${currentModalID}"]`);
  console.log(storage.isInStorage(currentModalID));
  if (storage.isInStorage(currentModalID)) {
    btn.children[0].textContent = 'Add to';
    btn.children[1].classList.toggle('icon-heart-not-active');
  } else {
    btn.children[0].textContent = 'Remove';
    btn.children[1].classList.toggle('icon-heart-not-active');
  }
  storage.toggleDrink(currentModalID);
}
function createPlaginationList(resultsNumber) {
  const plaginationMarkup = [];
  const numberOfItems = plagination.itemsPerPage();
  const numberOfPages = Math.ceil(resultsNumber / numberOfItems);
  for (let i = 1; i < numberOfPages + 1; i++) {
    plaginationMarkup.push(
      `<li><button type="button" class="pagination__numb pagination__item" id="${i}" data-page><span>${i}</span></button></li>`
    );
  }
  refs.pages.innerHTML = plaginationMarkup.join('');
  const plagBtns = document.querySelectorAll('[data-page]');
  plagBtns.forEach(btn => {
    btn.addEventListener('click', plaginationClick);
  });
}
function plaginationClick(e) {
  const plagBtns1 = document.querySelectorAll('[data-page]');
  plagBtns1.forEach(btn => btn.classList.remove('pagination__active'));
  e.target.classList.add('pagination__active');
  plagination.currentPage = e.currentTarget.id;
  console.log(plagination.currentPage);
  refs.mainCocktailsList.innerHTML = '';
  createFavCocktailsList();
}
function addIngredient(e) {
  if (e.currentTarget.children[0].textContent == 'Add to') {
    e.currentTarget.children[0].textContent = 'Remove';
  } else {
    e.currentTarget.children[0].textContent = 'Add to';
  }
  e.currentTarget.children[1].classList.toggle('icon-heart-not-active');
  storage.toggleIngredient(e.currentTarget.id);
}
function addIngredientModal(e) {
  if (e.currentTarget.children[0].textContent == 'Add to favorite') {
    e.currentTarget.children[0].textContent = 'Remove from favorite';
  } else {
    e.currentTarget.children[0].textContent = 'Add to favorite';
  }
  storage.toggleIngredient(modalId);
}
