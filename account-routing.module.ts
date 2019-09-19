import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginContainerComponent } from './containers/login-container.component';
import { RegisterContainerComponent } from './containers/register-container.component';
import { ResetPasswordContainerComponent } from './containers/reset-password-container.component';
import { ForgotPasswordComponent } from './components/forgot-password-component/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
// import { WebsiteComponent } from './components/website/website.component';

const routes: Routes = [
    // { path: 'venue-booking-system', component: WebsiteComponent },
    { path: 'admin/login', component: LoginContainerComponent },
    { path: 'venue-owner/login', component: LoginContainerComponent },
    { path: 'register', component: RegisterContainerComponent },
    { path: 'reset-password', component: ResetPasswordContainerComponent },
    { path: 'admin/forgot-password', component: ForgotPasswordComponent },
    { path: 'venue-owner/forgot-password', component: ForgotPasswordComponent },
    { path: 'verification/:token', component: VerifyEmailComponent },
    { path: '', redirectTo: 'venue-owner/login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }