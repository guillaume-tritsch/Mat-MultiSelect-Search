import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MSelectComponent } from './m-select.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  declarations: [MSelectComponent],
  exports: [MSelectComponent],
})
export class MSelectModule {}
