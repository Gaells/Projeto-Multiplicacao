import { Component, OnInit } from '@angular/core';

import { MultService } from '../services';

@Component({
  selector: 'app-mult',
  templateUrl: './mult.component.html',
  styleUrls: ['./mult.component.css']
})
export class MultComponent implements OnInit {
  private res : number = 0;

  constructor(private MultService: MultService) { }

  ngOnInit(): void {
  }

  mult(numero1: string, numero2: string): void {
    let n1: number;
    let n2: number;
    n1 = parseFloat(numero1);
    n2 = parseFloat(numero2);
    this.res = this.MultService.mult(n1, n2);
    }

    get resultado(): string {
      return this.res.toString();
      }
}
