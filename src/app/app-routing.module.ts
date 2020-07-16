import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe/recipe.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes= [
  {
      path: 'recipes',
      component: RecipeComponent,
      pathMatch: 'full'
  },

  {
    path: 'recipes/:id',
    component: RecipeDetailComponent,
    pathMatch: 'full'
}

,
  // {
  //     path: '**',
  //     redirectTo: 'recipes',
  //     pathMatch: 'full'
  // },




];


@NgModule({
  exports: [
    RouterModule
],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }




