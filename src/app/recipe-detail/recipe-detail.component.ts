import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  id: string;
  recipe_detail: Recipe;

  constructor(private route: ActivatedRoute, private recipe: RecipeService) {
}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.recipe.getRecipe(this.id).subscribe(
      (result: Recipe) => {
          // Traiter le résultat
          this.recipe_detail = result;

      },
      (error) => {
          // Traiter l'erreur
          console.log("error");
      }
  );



  }

}
