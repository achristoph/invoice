import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RootComponent } from './root.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InvoiceFormComponent } from './invoice-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      {
        path: ':id',
        component: AppComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    RootComponent,
    InvoiceFormComponent
  ],
  providers: [
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
