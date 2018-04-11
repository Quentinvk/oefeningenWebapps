import { Injectable } from '@angular/core';
import { Recipe } from './recipe/recipe.model';

@Injectable()
export class RecipeDataService {
private _recipes = new Array<Recipe>();
  constructor() {
    let recipe1 = new Recipe("spaghetti");
    let recipe2 = new Recipe("macaroni");
    recipe1.addIngredient("tomato", 0.75, "liter ");
    recipe1.addIngredient("onions", 2);
    recipe2.addIngredient("minced meat", 500, " grams ");
    this._recipes.push(recipe1);
    this._recipes.push(recipe2);
   }
    
   get recipes() : Recipe[] {
     return this._recipes;
   }

   addNewRecipe(recipe){
     this._recipes.push(recipe);
   }
}
