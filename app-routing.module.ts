import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WrapperComponent } from './shared/components/wrapper/wrapper.component';
import { AccountWrapperComponent } from './shared/components/account-wrapper/account-wrapper.component';
import { CMSWrapperComponent } from './shared/components/cms-wrapper/cms-wrapper.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { WebsiteComponent } from '../../src/app/account/components/website/website.component';
const routes: Routes = [
    {
        path: '',
        component: WebsiteComponent,
    },
    {
        path: 'account',
        loadChildren: './account/account.module#AccountModule',
        component: AccountWrapperComponent,
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        component: WrapperComponent,
    },
    {
        path: 'venue-owner',
        loadChildren: './venue-owner/venue-owner.module#VenueOwnerModule',
        component: WrapperComponent
    },
    {
        path: 'company',
        loadChildren: './cms/cms.module#CMSModule',
        component: CMSWrapperComponent
    },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }