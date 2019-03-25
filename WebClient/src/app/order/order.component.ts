import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataserviceService } from '../dataservice.service';
import { Order } from '../Model/order';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order;
  constructor(private route: ActivatedRoute,
    private service: DataserviceService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.service.getOrder(id).subscribe(data => this.order = data);
  }

  Save() {
    this.order.RecordStatus = 2;
    this.service.saveOrder(this.order).subscribe();
  }

  GoBack() {

  }

}
