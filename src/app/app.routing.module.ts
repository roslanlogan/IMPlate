import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './guards/auth.guard';
import { DashboardContainerComponent } from '../module/dashboard/dashboard-container.component';
import { BidComponent } from '../module/bid/bid.component';
import { AboutUsComponent } from '../module/about-us/about-us.component';
import { PurchaseComponent } from '../module/purchase/purchase.component';
import { ContactUsComponent } from '../module/contact-us/contact-us.component';
import { BookingComponent } from '../module/purchase/booking/booking.component';

const routes: Routes = [
  { path: '', component: DashboardContainerComponent },
  { path: 'dashboard', component: DashboardContainerComponent },
  { path: 'bid', component: BidComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'purchase/booking/:id', component: BookingComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
