import { Component, Input, OnInit} from '@angular/core';
import { FlowersService } from 'app/shared/flowers.service';
import { Flower } from 'app/shared/Flower';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit{
  @Input() changedQuantity: number = 0;

  flowers: Flower[] = [];
  currentQuantity!: number;
  subtotal: number = 0;
  total: number = 0;

  constructor(
    private flowersService: FlowersService
  ) { }

  ngOnInit(){
    this.flowersService.getFlowers();
    this.flowers = this.flowersService.flowers

    this.currentQuantity = this.flowersService.currentQuantity;
    for (let flower of this.flowers) {
      this.subtotal += flower.sum;
    }
    if (this.subtotal > 0 && this.subtotal < 100) {
      this.total = this.subtotal + 100;
    } else {
      this.total = this.subtotal;
    }
  }

  getFlowers(){
    this.flowersService.getFlowers()
    .subscribe({
      next: (flowers)=>{
        this.flowers = flowers as Flower[];
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }

    onRemove(removeSum: number, removeQuantity: number) {
      this.subtotal -= removeSum;
      this.total -= removeSum;
      if (this.subtotal > 0 && this.subtotal < 100) {
        this.total += 100;
      }
      this.flowersService.currentQuantity -= removeQuantity;
      this.flowersService.changeQuantity(this.flowersService.currentQuantity);
    }

    deleteRow(flower: any){
      const index = this.flowers.indexOf(flower);
      this.flowersService.deleteFlower(flower.id)
      .subscribe({
        next: (response)=>{
          this.flowers.splice(index, 1);
        },
        error: (error)=>console.log(error)
      })
    }

    changeFlowerFunc(qty1: string, flower: Flower) {
      var qty2 = parseInt(qty1)

      let changedId = flower.id;
      let changedName = flower.name;
      let changedPrice = flower.price;
      let changedQuantity = qty2;
      let changedSrc = flower.src;
      let changedSum = changedPrice * qty2;
      
      let newFlower = {
        id: changedId,
        name: changedName,
        price: changedPrice,
        quantity: changedQuantity,
        src: changedSrc,
        sum: changedSum
      }

      let index = this.flowers.findIndex(function(b){return b.id == flower.id});

      this.flowersService.editFlower(newFlower)
      .subscribe({
        next: (response) => {
          this.flowers[index].id = changedId;
          this.flowers[index].name = changedName;
          this.flowers[index].price = changedPrice;
          this.flowers[index].quantity = changedQuantity;
          this.flowers[index].src = changedSrc;
          this.flowers[index].sum = changedSum;
        },
        error: (err)=>console.log(err)
      })
      
      this.subtotal -= flower.sum;
      this.subtotal += changedSum;
      this.total -= flower.sum;
      this.total += changedSum;
      if (this.subtotal > 0 && this.subtotal < 100) {
        this.total += 100;
      }
 
      this.flowersService.currentQuantity -= flower.quantity;
      this.flowersService.currentQuantity += changedQuantity;
      this.flowersService.changeQuantity(this.flowersService.currentQuantity);
    
  }
}
  



