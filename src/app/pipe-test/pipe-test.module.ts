import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterOrdersPipe } from './filter-orders.pipe';
import { PipeTestComponent } from './pipe-test.component';



@NgModule({
  declarations: [
    PipeTestComponent,
    FilterOrdersPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class PipeTestModule { }
