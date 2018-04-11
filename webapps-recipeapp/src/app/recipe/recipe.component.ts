import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeDataService } from '../recipe-data.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'], 
  providers : [RecipeDataService]
})
export class RecipeComponent implements OnInit {
  @Input() public recipe : Recipe;

  constructor(private _recipeDataService : RecipeDataService) {
    
   }
  get ingredients() : string[] {
    return this.recipe.ingredients;
  }
  ngOnInit() {
  }

}
