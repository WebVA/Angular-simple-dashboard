import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*****************router*************************/
import { appRoutes } from './app.routes';
/*****************material Components*************************/
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from './MaterialModule';

/*****************Components*********************/
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { AwardListComponent } from './components/award/award-list/award-list.component';
import { AddAwardComponent } from './components/award/add-award/add-award.component';
import { UpdateAwardComponent } from './components/award/update-award/update-award.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { CraiteriaListComponent } from './components/craiteria/craiteria-list/craiteria-list.component';
import { AddCriteriaComponent } from './components/craiteria/add-criteria/add-criteria.component';
import { UpdateCriteriaComponent } from './components/craiteria/update-criteria/update-criteria.component';
import { SetupCategoryComponent } from './components/setup-category/setup-category.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AwardListComponent,
    AddAwardComponent,
    UpdateAwardComponent,
    CategoryListComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    CraiteriaListComponent,
    AddCriteriaComponent,
    UpdateCriteriaComponent,
    SetupCategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
