import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { CoffeeComponent } from './components/coffee/coffee.component';

const routes: Routes = [
  {path:'', component: CoffeeComponent},
  {path:'coffee', component: CoffeeComponent},
  {path:'productlist/:id', component: ProductdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
