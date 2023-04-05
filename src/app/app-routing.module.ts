import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OurglassesComponent } from './ourglasses/ourglasses.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  { path:'home', component: HomeComponent},
  { path:'cart', component: CartComponent},
  { path: 'about', component: AboutComponent},
  { path:'ourglasses', component: OurglassesComponent},
  { path:'contactus', component: ContactusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
