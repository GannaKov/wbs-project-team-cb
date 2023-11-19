"use strict";
import { recipesData } from "./js/gannaData.js";
import { renderDirection } from "./js/render.js";
import { renderIngredients } from "./js/render.js";
import { renderRecipe } from "./js/render.js";
renderRecipe(recipesData);
renderDirection(recipesData);
renderIngredients(recipesData);
