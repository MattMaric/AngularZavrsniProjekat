import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SocialSidebarComponent } from './social-sidebar/social-sidebar.component';
import { ShopComponent } from './shop/shop.component';
import { RouterModule, Routes } from '@angular/router';
import { SimpathyComponent } from './shop/simpathy/simpathy.component';
import { AnniversaryComponent } from './shop/anniversary/anniversary.component';
import { CongrulationsComponent } from './shop/congrulations/congrulations.component';
import { GetWellComponent } from './shop/get-well/get-well.component';
import { ProductComponent } from './product/product.component';
import { SimpathyService } from './shop/simpathy.service'
import { AnniversaryService } from './shop/anniversary.service';
import { CongrulationsService } from './shop/congrulations.service';
import { GetWellService } from './shop/getWell.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryFlowers } from './shared/in-memory-flowers';
import { FlowersService } from './shared/flowers.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SocialSidebarComponent,
    ShopComponent,
    SimpathyComponent,
    AnniversaryComponent,
    CongrulationsComponent,
    GetWellComponent,
    ProductComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    ShoppingCartComponent,
    ProductOrderComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, HttpClientInMemoryWebApiModule.forRoot (
      InMemoryFlowers, {dataEncapsulation: false}
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [SimpathyService,
              AnniversaryService, 
              CongrulationsService, 
              GetWellService,
              FlowersService],
  bootstrap: [AppComponent]
})
export class AppModule {
  }
 
