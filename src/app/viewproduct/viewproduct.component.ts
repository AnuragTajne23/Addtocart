import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from '../http.service';



export interface ViewData {

  id: number,
  title: string,
  price: number,
  description: string,
  image: string,
  quantity: string,
}


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:ViewData,private service:HttpService){

  }
  ngOnInit(): void {

  }
  cartdata(glasses: any) {
    glasses.totalPrice = glasses.price
    this.service.getproduct(glasses).subscribe(res => {
      console.log(glasses);
      this.service.getcartCount()
    })
  }
}
