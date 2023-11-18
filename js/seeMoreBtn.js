import { ref } from "./ref.js";

export function seeMoreControl() {
  ref.recipesList.addEventListener("click", onBtnClick);
}
function onBtnClick(e) {
  e.preventDefault();
  console.log(e);
  if (e.target.className === "wbsRecipe-button") {
    window.location.href = `./gannaRecipe.html?recipe=${e.target.dataset.id}`;
  }
}
