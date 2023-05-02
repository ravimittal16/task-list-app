import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TaskListModule } from './task-list/task-list.module';
import { NamePrefixPipe } from './name-prefix.pipe';
import { TaskFormRcComponent } from './task-form-rc/task-form-rc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductPriceHandlerComponent } from './product-price-handler/product-price-handler.component';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NamePrefixPipe,
    TaskFormRcComponent,
    ProductPriceHandlerComponent,
  ],
  imports: [
    BrowserModule,
    TaskListModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
