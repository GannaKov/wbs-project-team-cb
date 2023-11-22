import { ref } from "./ref.js";

export function renderRecipe(arr) {
  const recipeId = getParameterByName("recipe");

  let recipeMarkup;
  if (arr.length > 0) {
    recipeMarkup = `<h1 class="wbsOneRecipe-title">${
      arr[recipeId - 1].title
    }</h1>
        <img
            class="wbsOneRecipe-img"
            src=${arr[recipeId - 1].img}
            alt="Low-Carb Avocado Chicken Salad"
          />
          <p class="wbsOneRecipe-text">
            ${arr[recipeId - 1].description}
          </p> 
       `;
  } else {
    recipeMarkup = `<li class="wbsOneRecipe__dir-item"><p style="text-align:center">UPS... Nothing found!</p></li>`;
  }
  ref.oneRecipe.insertAdjacentHTML("afterbegin", recipeMarkup);
}

export function renderDirection(arr) {
  const recipeId = getParameterByName("recipe");

  let dirMarkup;
  if (arr.length > 0) {
    dirMarkup = arr[recipeId - 1].process
      .map(
        (item, index) => `<li class="wbsOneRecipe__dir-item">
                <p class="wbsOneRecipe__dir-num">${index + 1}</p>
                <p class="wbsOneRecipe__dir-text">
                  ${item}
                </p>
              </li>`
      )
      .join("");
  } else {
    dirMarkup = `<li class="wbsOneRecipe__dir-item"><p style="text-align:center">UPS... Nothing found!</p></li>`;
  }
  ref.directionList.insertAdjacentHTML("beforeend", dirMarkup);
}
function getParameterByName(name, url) {
  if (!url) url = window.location.href;

  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);

  if (!results) return null;
  if (!results[2]) return "";

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
export function renderIngredients(arr) {
  const recipeId = getParameterByName("recipe");

  let ingrMarkup;
  if (arr.length > 0) {
    ingrMarkup = arr[recipeId - 1].ingredients
      .map(
        (item, index) => `<thead class="table-dark">
              
            
          
              <tr>
                <th scope="row">${index + 1}</th>
                <td>${item}</td>
              </tr>
              
            `
      )
      .join("");
  } else {
    ingrMarkup = `<li class="wbsOneRecipe__dir-item"><p style="text-align:center">UPS... Nothing found!</p></li>`;
  }
  ref.tableIngrBody.insertAdjacentHTML("beforeend", ingrMarkup);
}

export function renderAllRecipes(arr) {
  let markup;
  if (arr.length > 0) {
    markup = arr
      .map(
        (
          item
        ) => `<li class="wbsRecipes-item"><h2 class="wbsRecipe-title">${item.title}</h2>
      <img
   class="wbsRecipe-img"
  src=${item.img}
  alt=${item.title}
/>
<div class="wbsRecipe-description">
  <p class="wbsRecipe-text">
    ${item.description}
  </p></div><button class="wbsRecipe-button" data-id="1" role="See more" type="button">
    SEE MORE
</button>
</li>`
      )
      .join("");
  } else {
    markup = `<li class="wbsRecipe-text"><p style="text-align:center">UPS... Nothing found!</p></li>`;
  }
  ref.recipesList.insertAdjacentHTML("beforeend", markup);
}
