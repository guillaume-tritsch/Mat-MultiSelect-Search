import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MSelectModule } from './multiselect/multiselect.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectModule } from './select/select.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    SelectModule,
    MatCheckboxModule,
    MatInputModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
