import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JqueryComponent } from './components/jquery/jquery.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { HomComponent } from './components/hom/hom.component';
import { FormsComponent } from './components/forms/forms.component';


const appRouter: Routes = [
    {path: '', component: HomComponent},
    {path: 'hom', component: HomComponent},
    {path: 'directiva', component: DirectivasComponent},
    {path: 'jquery', component: JqueryComponent},
    {path: 'forms', component: FormsComponent},
    {path: '**', component: HomComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);
