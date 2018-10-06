import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { NavBarComponent } from '../module/nav-bar/nav-bar.component';
import { FooterComponent } from '../module/footer/footer.component';
import { DashboardContainerComponent } from '../module/dashboard/dashboard-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from '../util/pipes/pipes.module';
import { CarouselComponent } from '../module/dashboard/component/carousel/carousel.component';
import { AboutCardComponent } from '../module/dashboard/component/about-card/about-card.component';
import { BidComponent } from '../module/bid/bid.component';
import { PurchaseComponent } from '../module/purchase/purchase.component';
import { AboutUsComponent } from '../module/about-us/about-us.component';
import { ContactUsComponent } from '../module/contact-us/contact-us.component';
import { BookingComponent } from '../module/purchase/booking/booking.component';
import { HttpModule } from '@angular/http';
import {ToasterModule, ToasterService} from 'angular2-toaster';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    DashboardContainerComponent,
    CarouselComponent,
    AboutCardComponent,
    BidComponent,
    PurchaseComponent,
    AboutUsComponent,
    ContactUsComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    HttpModule,
    ToasterModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
