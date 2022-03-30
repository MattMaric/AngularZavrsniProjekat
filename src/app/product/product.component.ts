import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SimpathyService } from 'app/shop/simpathy.service';
import { AnniversaryService } from 'app/shop/anniversary.service';
import { CongrulationsService } from 'app/shop/congrulations.service';
import { GetWellService } from 'app/shop/getWell.service';
import { ShoppingCartService } from 'app/shop/shoppingCart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  newProduct!: { id: number; name: string; price: number; src: string; path: string; text: string; };
  boughtProduct!: { id: number; name: string; price: number; quantity: number }

  constructor(
    private route: ActivatedRoute,
    private simpathyService: SimpathyService,
    private anniversaryService: AnniversaryService,
    private congrulationsService: CongrulationsService,
    private getWellService: GetWellService,
    public shoppingCartService: ShoppingCartService
    ) { }

  ngOnInit() {
    this.newProduct = {
      id : this.route.snapshot.params['id'],
      name : this.route.snapshot.params['name'],
      price : this.route.snapshot.params['price'],
      src : this.route.snapshot.params['src'],
      path : this.route.snapshot.params['path'],
      text : this.route.snapshot.params['text']
    };
  
  }
  updatePrev(newProduct: { id: number; name: string; price: number; src: string; path: string; text: string; }) {

    if (this.simpathyService.products1.some(function(el) {
      return el.src === newProduct.src;
    })) {
      var newProduct2 = this.simpathyService.products1.findIndex(prod => prod.id == newProduct.id);
      var newProduct3 = this.simpathyService.products1[newProduct2 - 1];

      if (newProduct2 === 0) {
        var newProduct4 = this.simpathyService.products1[11];
        this.newProduct.id = newProduct4.id;
        this.newProduct.name = newProduct4.name;
        this.newProduct.price = newProduct4.price;
        this.newProduct.src = newProduct4.src;
        this.newProduct.path = newProduct4.path;
        this.newProduct.text = newProduct4.text;
      } else {
        this.newProduct.id = newProduct3.id;
        this.newProduct.name = newProduct3.name;
        this.newProduct.price = newProduct3.price;
        this.newProduct.src = newProduct3.src;
        this.newProduct.path = newProduct3.path;
        this.newProduct.text = newProduct3.text;
      }
    } else if (this.anniversaryService.products2.some(function(el) {
      return el.name === newProduct.name;
    })) {
      var newProduct2 = this.anniversaryService.products2.findIndex(prod => prod.id == newProduct.id);
      var newProduct3 = this.anniversaryService.products2[newProduct2 - 1];

      if (newProduct2 === 0) {
        var newProduct4 = this.anniversaryService.products2[4];
        this.newProduct.id = newProduct4.id;
        this.newProduct.name = newProduct4.name;
        this.newProduct.price = newProduct4.price;
        this.newProduct.src = newProduct4.src;
        this.newProduct.path = newProduct4.path;
        this.newProduct.text = newProduct4.text;
      } else {
        this.newProduct.id = newProduct3.id;
        this.newProduct.name = newProduct3.name;
        this.newProduct.price = newProduct3.price;
        this.newProduct.src = newProduct3.src;
        this.newProduct.path = newProduct3.path;
        this.newProduct.text = newProduct3.text;
      }
    } else if (this.congrulationsService.products3.some(function(el) {
      return el.name === newProduct.name;
    })) {
      var newProduct2 = this.congrulationsService.products3.findIndex(prod => prod.id == newProduct.id);
      var newProduct3 = this.congrulationsService.products3[newProduct2 - 1];

      if (newProduct2 === 0) {
        var newProduct4 = this.congrulationsService.products3[3];
        this.newProduct.id = newProduct4.id;
        this.newProduct.name = newProduct4.name;
        this.newProduct.price = newProduct4.price;
        this.newProduct.src = newProduct4.src;
        this.newProduct.path = newProduct4.path;
        this.newProduct.text = newProduct4.text;
      } else {
        this.newProduct.id = newProduct3.id;
        this.newProduct.name = newProduct3.name;
        this.newProduct.price = newProduct3.price;
        this.newProduct.src = newProduct3.src;
        this.newProduct.path = newProduct3.path;
        this.newProduct.text = newProduct3.text;
      }
    } else if (this.getWellService.products4.some(function(el) {
      return el.name === newProduct.name;
    })) {
      console.log(newProduct)
      var newProduct2 = this.getWellService.products4.findIndex(prod => prod.id == newProduct.id);
      var newProduct3 = this.getWellService.products4[newProduct2 - 1];

      if (newProduct2 === 0) {
        var newProduct4 = this.getWellService.products4[4];
        this.newProduct.id = newProduct4.id;
        this.newProduct.name = newProduct4.name;
        this.newProduct.price = newProduct4.price;
        this.newProduct.src = newProduct4.src;
        this.newProduct.path = newProduct4.path;
        this.newProduct.text = newProduct4.text;
      } else {
        this.newProduct.id = newProduct3.id;
        this.newProduct.name = newProduct3.name;
        this.newProduct.price = newProduct3.price;
        this.newProduct.src = newProduct3.src;
        this.newProduct.path = newProduct3.path;
        this.newProduct.text = newProduct3.text;
      }
    }
  }

  updateNext (newProduct: { id: number; name: string; price: number; src: string; path: string; text: string; }) {

    if (this.simpathyService.products1.some(function(el) {
      return el.src === newProduct.src;
    })) {
      var newProduct2 = this.simpathyService.products1.findIndex(prod => prod.id == newProduct.id);
      var newProduct3 = this.simpathyService.products1[newProduct2 + 1];

      if (newProduct2 === 11) {
        var newProduct4 = this.simpathyService.products1[0];
        this.newProduct.id = newProduct4.id;
        this.newProduct.name = newProduct4.name;
        this.newProduct.price = newProduct4.price;
        this.newProduct.src = newProduct4.src;
        this.newProduct.path = newProduct4.path;
        this.newProduct.text = newProduct4.text;
      } else {
        this.newProduct.id = newProduct3.id;
        this.newProduct.name = newProduct3.name;
        this.newProduct.price = newProduct3.price;
        this.newProduct.src = newProduct3.src;
        this.newProduct.path = newProduct3.path;
        this.newProduct.text = newProduct3.text;
      }
    } else if (this.anniversaryService.products2.some(function(el) {
      return el.name === newProduct.name;
    })) {
      var newProduct2 = this.anniversaryService.products2.findIndex(prod => prod.id == newProduct.id);
      var newProduct3 = this.anniversaryService.products2[newProduct2 + 1];

      if (newProduct2 === 4) {
        var newProduct4 = this.anniversaryService.products2[0];
        this.newProduct.id = newProduct4.id;
        this.newProduct.name = newProduct4.name;
        this.newProduct.price = newProduct4.price;
        this.newProduct.src = newProduct4.src;
        this.newProduct.path = newProduct4.path;
        this.newProduct.text = newProduct4.text;
      } else {
        this.newProduct.id = newProduct3.id;
        this.newProduct.name = newProduct3.name;
        this.newProduct.price = newProduct3.price;
        this.newProduct.src = newProduct3.src;
        this.newProduct.path = newProduct3.path;
        this.newProduct.text = newProduct3.text;
      }
    } else if (this.congrulationsService.products3.some(function(el) {
      return el.name === newProduct.name;
    })) {
      var newProduct2 = this.congrulationsService.products3.findIndex(prod => prod.id == newProduct.id);
      var newProduct3 = this.congrulationsService.products3[newProduct2 + 1];
      
      if (newProduct2 === 3) {
        var newProduct4 = this.congrulationsService.products3[0];
        this.newProduct.id = newProduct4.id;
        this.newProduct.name = newProduct4.name;
        this.newProduct.price = newProduct4.price;
        this.newProduct.src = newProduct4.src;
        this.newProduct.path = newProduct4.path;
        this.newProduct.text = newProduct4.text;
      } else {
        this.newProduct.id = newProduct3.id;
        this.newProduct.name = newProduct3.name;
        this.newProduct.price = newProduct3.price;
        this.newProduct.src = newProduct3.src;
        this.newProduct.path = newProduct3.path;
        this.newProduct.text = newProduct3.text;
      }
    } else if (this.getWellService.products4.some(function(el) {
      return el.name === newProduct.name;
    })) {
      var newProduct2 = this.getWellService.products4.findIndex(prod => prod.id == newProduct.id);
      var newProduct3 = this.getWellService.products4[newProduct2 + 1];

      if (newProduct2 === 4) {
        var newProduct4 = this.getWellService.products4[0];
        this.newProduct.id = newProduct4.id;
        this.newProduct.name = newProduct4.name;
        this.newProduct.price = newProduct4.price;
        this.newProduct.src = newProduct4.src;
        this.newProduct.path = newProduct4.path;
        this.newProduct.text = newProduct4.text;
      } else {
        this.newProduct.id = newProduct3.id;
        this.newProduct.name = newProduct3.name;
        this.newProduct.price = newProduct3.price;
        this.newProduct.src = newProduct3.src;
        this.newProduct.path = newProduct3.path;
        this.newProduct.text = newProduct3.text;
      }
    }
  }

  boughtProducts(newQuantity : string, newId: number, newName: string, newPrice: number) {
      let id = newId *1;
      let quantity = parseInt(newQuantity);
      let name = newName;
      let price = newPrice;

      this.boughtProduct = {
        id: id,
        name: name,
        price: price,
        quantity: quantity
      }

    this.shoppingCartService.addToCart(this.boughtProduct, newId, newName, newPrice)
    };
        
}



