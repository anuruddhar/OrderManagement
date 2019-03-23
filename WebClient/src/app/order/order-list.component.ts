import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../Model/order';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[];
  filteredOrders: Order[];
  _filter: string;
  get filter(): string {
    return this._filter;
  }
  set filter(val: string) {
    this._filter = val;
    this.filteredOrders = this.filter ? this.getFilteredOrders() : this.orders;
  }
  constructor(private service: DataserviceService, private router: Router) {

  }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.service.getOrders().subscribe(
      list => {
        this.orders = list;
        this.filteredOrders = this.orders;
      }
    );
  }

  onEdit(orderId: number): void {
    this.router.navigate(['/order', orderId]);
  }

  getFilteredOrders(): Order[] {
    // method 01:
    //return this.orders.filter(p=>p.OrderNumber.toLocaleLowerCase().indexOf(this.filter.toLocaleLowerCase())!== -1);
    // method 02:
    return this.orders.filter(p => {
      return p.OrderNumber.toLocaleLowerCase().includes(this.filter.toLocaleLowerCase());
    });
  }


}
