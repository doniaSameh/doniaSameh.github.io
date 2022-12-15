import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import{LoginComponent} from './login/login.component';
import{HomeComponent} from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { HistoryComponent } from './history/history.component';
import { TrackComponent } from './track/track.component';
const routes: Routes = [ { path: '', redirectTo: '/signup', pathMatch: 'full' },{ path: 'signup', component: SignupComponent }, { path: 'login', component: LoginComponent },{ path: 'home', component: HomeComponent },{ path: 'cart', component: CartComponent },{ path: 'payment', component: PaymentComponent },{ path: 'history', component: HistoryComponent },{ path: 'track', component: TrackComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
