import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount = 0
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.getcartCount();
    this.http.cartCount.subscribe(res => {
      this.cartCount = res
      // this.http.getcartCount()
      console.log(this.cartCount);
    })
  }
  search(event: any) {
    this.http.getSearchKey(event.target.value)
  }
}
