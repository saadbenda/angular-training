import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe/recipe.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeListComponent,
    pathMatch: 'full',
  },

  {
    path: 'recipes/:id',
    component: RecipeDetailComponent,
    pathMatch: 'full',
  },

  {
    path: 'form',
    component: FormComponent,
    pathMatch: 'full',
  },

  {
    path: '**',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
