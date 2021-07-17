import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaptopsListComponent } from './components/laptops-list/laptops-list.component';
import { LaptopDetailsComponent } from './components/laptop-details/laptop-details.component';
import { AddLaptopComponent } from './components/add-laptop/add-laptop.component';

const routes: Routes = [
  { path: '', redirectTo: 'laptops', pathMatch: 'full' },
  { path: 'laptops', component: LaptopsListComponent },
  { path: 'laptops/:id', component: LaptopDetailsComponent },
  { path: 'add', component: AddLaptopComponent },
  { path: 'search/:id', component: LaptopsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
