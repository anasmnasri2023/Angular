import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriesComponent } from './Composants/list-categories/list-categories.component';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './Composants/home/home.component';
import { ProductsCategoryComponent } from './products-category-component/products-category-component'
import { ProductsCategoryQPComponentComponent } from './products-category-qpcomponent/products-category-qpcomponent.component';
import { ContactComponent } from './contact/contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: ListCategoriesComponent },
  { path: 'category/:id', component: DetailsCategoryComponent },
  { path: 'products/:id', component: ProductsCategoryComponent },
  { path: '**', component: NotFoundComponent } ,
  { path: 'products-category-qp', component: ProductsCategoryQPComponentComponent}, 
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) }, 
  { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) }, 
  { path: 'apropos', loadChildren: () => import('./apropos/apropos.module').then(m => m.AproposModule) }, 
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
