import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendFunctionsComponent } from './vend-functions/vend-functions.component';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    VendFunctionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
