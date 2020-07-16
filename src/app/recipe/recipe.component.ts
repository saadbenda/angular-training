import { RecipeService } from './../recipe.service';
import { Recipe } from './../model/recipe.model';
import { MOCK_RECIPES } from './../../assets/recipes.mock';
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input()
  recipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }
  toggle=false;
  textButon="show instructions";
  toggleExpand(): void {

    this.toggle=!this.toggle;
    this.textButon=this.toggle?"hide instructions":"show instructions";

  }




}
