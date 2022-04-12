import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlowersService } from 'app/shared/flowers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
export class ProductOrderComponent implements OnInit {

  orderForm!: FormGroup;
  quantitySubscription!: Subscription;

  constructor(
    private router: Router,
    private flowersService: FlowersService)
     { }

  onSubmit() {
    console.log(this.orderForm)
    this.flowersService.flowers = [];
    this.flowersService.currentQuantity = 0;
    this.flowersService.changeQuantity(this.flowersService.currentQuantity);
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.orderForm = new FormGroup ({
      'orderFname': new FormControl(null, Validators.required),
      'orderLname': new FormControl(null, Validators.required),
      'orderEmail': new FormControl(null, [Validators.required, Validators.email]),
      'orderPhone': new FormControl(null, Validators.required),
      'orderAddress': new FormControl(null, Validators.required),
      'orderComment': new FormControl(),
      'orderPayment': new FormControl(null, Validators.required)
    })
  }

}
