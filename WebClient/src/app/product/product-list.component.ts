import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Product } from '../Model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  ratingMessage: string;
  constructor(private dataserviceService: DataserviceService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.dataserviceService.getProducts().subscribe(p => {
      this.products = p;
    });
  }

  onRatingClicked(message: string): void {
    this.ratingMessage = "- "+ message;
  }


}
