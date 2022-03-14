import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  pageTitle: string;
  constructor() { this.pageTitle = "Product Details";}
  ngOnInit(): void {
  }

}
