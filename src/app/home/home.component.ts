import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewproductComponent } from '../viewproduct/viewproduct.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: HttpService, public dialog: MatDialog) { }
  images: any
  products: any;
  searchString: any
  ngOnInit(): void {
    this.service.searchKey.subscribe(res => {
      this.searchString = res
    })
    this.service.getcartCount()
    this.service.getGlass().subscribe(res => {
      this.products = res
    })
  }

  cartdata(glasses: any) {
    glasses.totalPrice = glasses.price
    this.service.getproduct(glasses).subscribe(res => {
      console.log(glasses);
      this.service.getcartCount()
    })
  }
  openDialog(data: any) {
    this.dialog.open(ViewproductComponent, {
      data: {
        id: data.id,
        title: data.title,
        price: data.price,
        description: data.description,
        image: data.image,
        quantity: data.quantity,
      },
    });
  }
}
