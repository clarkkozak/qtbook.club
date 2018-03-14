import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { ClubComponent } from './club/club.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { AccountComponent } from './account/account.component'
import { LogInComponent } from './log-in/log-in.component'
import { ContactComponent } from './contact/contact.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'club', component: ClubComponent },
  { path: 'account', component: AccountComponent },
  { path: 'log-in', component: AccountComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'contact', component: ContactComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}