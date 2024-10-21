import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Composants/header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './Composants/footer/footer.component';
import { ListCategoriesComponent } from './Composants/list-categories/list-categories.component';
import { HomeComponent } from './Composants/home/home.component';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightDirective } from './highlight.directive';
import { DetailsCategoryComponent } from './details-category/details-category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category-component/products-category-component';
import { ProductsCategoryQPComponentComponent } from './products-category-qpcomponent/products-category-qpcomponent.component';
import { AddcategorieComponent } from './addcategorie/addcategorie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ListCategoriesComponent,
    HomeComponent,
    FilterPipe,
    HighlightDirective,
    DetailsCategoryComponent,
    NotFoundComponent,
    ProductsCategoryComponent,
    ProductsCategoryQPComponentComponent,
    AddcategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
