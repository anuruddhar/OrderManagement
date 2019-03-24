import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RatingComponent } from './rating/rating.component';
import { SpaceToHypenPipe } from './space-to-hypen.pipe';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    RatingComponent,
    SpaceToHypenPipe
  ],
  exports:[
    BrowserModule,
    CommonModule,
    FormsModule,
    
    RatingComponent,
    SpaceToHypenPipe
  ]
})
export class SharedModule { }
