import { Component,OnInit } from '@angular/core';
import {HttpService} from '../http.service'

@Component({
  selector: 'app-ourglasses',
  templateUrl: './ourglasses.component.html',
  styleUrls: ['./ourglasses.component.css']
})
export class OurglassesComponent implements OnInit{
  constructor(private service:HttpService){

  }

  products: any;
  ngOnInit(): void {
    this.service.getGlass().subscribe((res: any) => {
      this.products = res
    })
  }
}
