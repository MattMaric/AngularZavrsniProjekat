import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SimpathyComponent } from './shop/simpathy/simpathy.component';
import { AnniversaryComponent } from './shop/anniversary/anniversary.component';
import { CongrulationsComponent } from './shop/congrulations/congrulations.component';
import { GetWellComponent } from './shop/get-well/get-well.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shop', component: ShopComponent, children: [
    {path: 'simpathy', component: SimpathyComponent},
    {path: 'anniversary', component: AnniversaryComponent},
    {path: 'congrulations', component: CongrulationsComponent},
    {path: 'getWell', component: GetWellComponent}
  ]},
  {path: 'product/:id/:name/:price/:src/:path/:text', component: ProductComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent, canActivate: [AuthGuard]},
  {path: 'product-order', component: ProductOrderComponent},
  {path: 'about', component: AboutComponent},
  {path: 'page-not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/page-not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
