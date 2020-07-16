import { RecipeIngredient } from './../model/recipe-ingredient.model';
import { Recipe } from './../model/recipe.model';
import { Ingredient } from './../model/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  addForm: FormGroup;
  image: 'image';
  ingredient = new Ingredient();
  RecipeIngredient = new RecipeIngredient(10, this.ingredient, 100, 'kg');
  model = new Recipe(10,'ben',image,'this is a description',this.ingredient,);

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addForm = this.fb.group({
      // Crée une instance de FormGroup
      name: ['test'], // Crée une instance de FormControl
      description: ['test'], // Crée une instance de FormControl
    });
  }

  submit() {
    const name = this.addForm.get('name').value;
    // On pourrait aussi accéder à une clé spécifique de l'objet loginForm.value
    //const username = this.addForm.value['description'];
    const description = this.addForm.get('description').value;

    console.log('Données du formulaire...', this.addForm.value);
  }
}
