import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'crisis-list', component: CrisisListComponent},
      {path: 'heroes-list', component: HeroesListComponent}, 
      { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
