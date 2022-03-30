import { Component, OnInit } from '@angular/core';
import { SimpathyService } from '../simpathy.service';

@Component({
  selector: 'app-simpathy',
  templateUrl: './simpathy.component.html',
  styleUrls: ['./simpathy.component.css'],
  providers: [SimpathyService]
})
export class SimpathyComponent implements OnInit {
  products1: {id: number, name: string, price: number, src: string, path: string, text: string}[] = [];

  constructor(
    private simpathyService: SimpathyService
  ) { }

  ngOnInit(){
    this.products1 = this.simpathyService.products1;
  }

}
