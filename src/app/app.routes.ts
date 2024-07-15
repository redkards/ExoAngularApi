import { Routes } from '@angular/router';
import { AuthorsComponent } from './components/authors/authors.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AuthorCreateComponent } from './components/author-create/author-create.component';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },

  { path: 'accueil', component: AccueilComponent },

  { path: 'auteurs', component: AuthorsComponent },

  { path: 'creerAuteur', component: AuthorCreateComponent },

  { path: '**', component: NotFoundComponent },
];
