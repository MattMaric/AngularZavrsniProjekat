import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'app/shop/shoppingCart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  quantitySubscription!: Subscription;

  constructor(
    private shoppingCartService : ShoppingCartService
  ) { }

  public numOfProducts = 0;

  ngOnInit(): void {
    this.quantitySubscription = this.shoppingCartService.getQuantity().subscribe((num)=>{
      this.numOfProducts = num;
    })
  }

}
