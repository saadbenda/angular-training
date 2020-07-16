import { RecipeService } from '../recipe.service';
import { Recipe } from './../model/recipe.model';

import { MOCK_RECIPES } from './../../assets/recipes.mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipe: RecipeService) {}

  ngOnInit(): void {
    this.recipe.getRecipes().subscribe(
      (result: Recipe[]) => {
        // Traiter le résultat
        this.recipes = result;
      },
      (error) => {
        // Traiter l'erreur
        console.log('error');
      }
    );
  }
}
