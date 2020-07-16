import { RecipeService } from './../../../../firstApp/src/app/recipe.service';
import { Recipe } from './../model/recipe.model';

import { MOCK_RECIPES } from './../../assets/recipes.mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];


  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {

    this.recipeService.getRecipes().subscribe(
      (result: Recipe[]) => {
          // Traiter le résultat
          this.recipes =result;

      },
      (error) => {
          // Traiter l'erreur
      }
  );
  }



}
