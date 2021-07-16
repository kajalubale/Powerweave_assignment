import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  counter=999.99;
  constructor() { }

  ngOnInit(): void {
  }
  // quantity:number=999.99;
  // box1(){
  //   var abc = this.quantity + 50;
  //   return abc;
  // }

}
