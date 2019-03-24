import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
