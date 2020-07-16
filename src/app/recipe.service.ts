import { MOCK_RECIPES } from './../assets/recipes.mock';
import { Recipe } from './model/recipe.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  private recipeUrl = 'http://10.0.1.101:8080/api/v1/recipes';


  getRecipes(): Observable<Recipe[]> {
      return this.http.get<Recipe[]>(this.recipeUrl);

 }

  getRecipe(id: string): Observable<Recipe> {
     return this.http.get<Recipe>(`${ this.recipeUrl }/${ id }`);
 }

 add(recipe: Recipe): Observable<Recipe> {
  return this.http.post<Recipe>(this.recipeUrl, recipe);
 }
 delete(id: string): Observable<void> {
  return this.http.delete<void>(`${ this.recipeUrl }/${ id }`);
 }
}

//   getRecipes(): Observable<Recipe[]> {
//     return of(MOCK_RECIPES);
// }



