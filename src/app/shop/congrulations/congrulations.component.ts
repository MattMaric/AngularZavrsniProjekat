import { Component, OnInit } from '@angular/core';
import { CongrulationsService } from '../congrulations.service';

@Component({
  selector: 'app-congrulations',
  templateUrl: './congrulations.component.html',
  styleUrls: ['./congrulations.component.css'],
  providers: [CongrulationsService]
})
export class CongrulationsComponent implements OnInit {
  products3: {id: number, name: string, price: number, src: string, path: string, text: string}[] = [];

  constructor(
    private congrulationsService: CongrulationsService
  ) { }

  ngOnInit() {
    this.products3 = this.congrulationsService.products3;
  }

}
