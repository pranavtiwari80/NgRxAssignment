import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { EffectsModule } from '@ngrx/effects';
import { CoffeeEffects } from './effects/coffee.effects';
import { reducers, metaReducers } from './reducers/index';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component'; // Module for pagination
import {  ProductdetailsComponent } from './components/productdetails/productdetails.component'; // Module for pagination

@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    HeaderComponent,
    FooterComponent,
    ProductdetailsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([CoffeeEffects]),
    StoreModule.forRoot(reducers, { metaReducers,
    runtimeChecks: {
      strictStateImmutability: true,
      strictActionImmutability: true,
    } }),

    //StoreModule.forRoot(coffeeItemsState)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
