import { Component, OnInit } from '@angular/core';
import { FlowersService } from 'app/shared/flowers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  quantitySubscription!: Subscription;

  constructor(
    private flowersService: FlowersService
  ) { }

  public numOfProducts = 0;

  ngOnInit(): void {
    this.quantitySubscription = this.flowersService.getQuantity().subscribe((num)=>{
      this.numOfProducts = num;
    })
  }

}
