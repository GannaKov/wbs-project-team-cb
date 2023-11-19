"use strict";
import { recipesData } from "./js/gannaData.js";
import { renderDirection } from "./js/render.js";
import { renderIngredients } from "./js/render.js";
renderDirection(recipesData);
renderIngredients(recipesData);
