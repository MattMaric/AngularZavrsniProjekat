import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'app/shop/shoppingCart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  boughtProductList: {id: number; name: string; price: number; quantity: number; src: string, sum: number}[] = [];
  currentQuantity!: number;
  subtotal: number = 0;
  total: number = 0;

  constructor(
    private shoppingCartService : ShoppingCartService
  ) { }

  ngOnInit(){
    this.boughtProductList = this.shoppingCartService.boughtProductList;
    this.currentQuantity = this.shoppingCartService.currentQuantity;
    for (let boughtP of this.boughtProductList) {
      this.subtotal += boughtP.sum;
    }
    if (this.subtotal > 0 && this.subtotal < 100) {
      this.total = this.subtotal + 100;
    } else {
      this.total = this.subtotal;
    }
    }

    onRemove(removeSum: number, removeQuantity: number) {
      this.subtotal -= removeSum;
      this.total -= removeSum;
      if (this.subtotal > 0 && this.subtotal < 100) {
        this.total += 100;
      }
      this.shoppingCartService.currentQuantity -= removeQuantity;
      this.shoppingCartService.changeQuantity(this.shoppingCartService.currentQuantity);
    }

    deleteRow(boughtP: any){
      const index = this.boughtProductList.indexOf(boughtP);
      this.shoppingCartService.boughtProductList.splice(index, 1);
    }
  }


