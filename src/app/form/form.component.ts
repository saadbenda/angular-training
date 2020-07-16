import { RecipeService } from './../recipe.service';
import { RecipeIngredient } from './../model/recipe-ingredient.model';
import { Recipe } from './../model/recipe.model';
import { Ingredient } from './../model/ingredient.model';
import { Component, OnInit, Input, ɵinitServicesIfNeeded } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  //addForm: FormGroup;
  ingredient = new Ingredient();
  recipeIngredient = new RecipeIngredient();
  recipe = new Recipe();


  constructor(private fb: FormBuilder, private service: RecipeService) {}

  ngOnInit() {
  }

  add() {
    this.service.add(this.recipe).subscribe();
    console.log('Données du formulaire...');
  }

  delete(id:string){
    this.service.delete(id).subscribe();
  }




}
