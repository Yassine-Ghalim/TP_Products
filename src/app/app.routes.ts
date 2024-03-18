import { DefaultTitleStrategy, RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'Accueill', component: AccueilComponent },
    { path: 'product', component: ProductListComponent },
    { path: '**', redirectTo: '' } // Redirection par défaut vers l'accueil

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }