import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CartService } from './cart.service';
import { ConfigComponent } from './config/config.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';


@NgModule({
  
  providers: [CartService],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ConfigComponent,
    RoutingComponents
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
