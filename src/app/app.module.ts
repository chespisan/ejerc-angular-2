import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


// Services

// Routes
import { routing } from './app.routing';

// All Components
import { AppComponent } from './app.component';
import { HomComponent } from './components/hom/hom.component';
import { DecoratorsComponent } from './components/decorators/decorators.component';
import { JqueryComponent } from './components/jquery/jquery.component';
import { FormsComponent } from './components/forms/forms.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomComponent,
    DecoratorsComponent,
    JqueryComponent,
    FormsComponent,
    DirectivasComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
