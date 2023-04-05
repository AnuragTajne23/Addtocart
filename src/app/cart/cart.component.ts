import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: any;
  constructor(private addcart: HttpService) { }

  ngOnInit(): void {
    this.getCartData()
  }

  getCartData() {
    this.products = this.addcart.getcart().subscribe(res => {
      this.products = res
      this.addcart.getcartCount()
    })
  }

  sub(data: any) {
    if (data.quantity > 1) {
      data.quantity--
      data.totalPrice = data.quantity * data.price
      this.addcart.updateCardData(data).subscribe(res => {
        console.log(res);
      })
    }
    else {
      this.delete(data.id)
    }
  }
  add(data: any) {
    data.quantity++
    data.totalPrice = data.quantity * data.price
    this.addcart.updateCardData(data).subscribe(res => {
    })
  }
  delete(id: number) {
    this.addcart.deleteCardData(id).subscribe(res => {
      this.getCartData()
    })
  }
}
