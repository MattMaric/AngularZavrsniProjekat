import { Component, OnInit } from '@angular/core';
import { GetWellService } from '../getWell.service';

@Component({
  selector: 'app-get-well',
  templateUrl: './get-well.component.html',
  styleUrls: ['./get-well.component.css'],
  providers: [GetWellService]
})
export class GetWellComponent implements OnInit {
  products4: {id: number, name: string, price: number, src: string, path: string, text: string}[] = [];

  constructor(
    private getWellService: GetWellService
  ) { }

  ngOnInit() {
    this.products4 = this.getWellService.products4;
  }

}
