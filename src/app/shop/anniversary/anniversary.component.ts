import { Component, OnInit } from '@angular/core';
import { AnniversaryService } from '../anniversary.service';

@Component({
  selector: 'app-anniversary',
  templateUrl: './anniversary.component.html',
  styleUrls: ['./anniversary.component.css'],
  providers: [AnniversaryService]
})
export class AnniversaryComponent implements OnInit {
  products2: {id: number, name: string, price: number, src: string, path: string, text: string}[] = [];

  constructor(
    private anniversaryService: AnniversaryService
  ) { }

  ngOnInit() {
    this.products2 = this.anniversaryService.products2;
  }

}
