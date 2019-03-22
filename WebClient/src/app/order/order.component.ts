import { Component, OnInit } from '@angular/core';
import { Order } from '../Model/order';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[];
  constructor(private service: DataserviceService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.service.getOrders().subscribe(
      list => { this.orders = list; }
    );
  }

}
