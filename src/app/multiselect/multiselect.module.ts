import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MSelectComponent } from './multiselect.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ],
  declarations: [MSelectComponent],
  exports: [MSelectComponent],
})
export class MSelectModule {}
