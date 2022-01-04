import { Routes, RouterModule } from '@angular/router'
/*****************Components*********************/
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



/*****************Routes*********************/
export const appRoutes: Routes = [
    { path: '', component: AwardListComponent },
    { path: 'award-list', component: AwardListComponent },
    { path: 'add-aword', component: AddAwardComponent },
    { path: 'update-aword', component: UpdateAwardComponent },
    { path: 'category-list', component: CategoryListComponent },
    { path: 'add-category', component: AddCategoryComponent },
    { path: 'update-category', component: UpdateCategoryComponent },
    { path: 'craiteria-list', component: CraiteriaListComponent },
    { path: 'add-criteria', component: AddCriteriaComponent },
    { path: 'update-criteria', component: UpdateCriteriaComponent },

];