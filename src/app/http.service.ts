import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public searchKey = new Subject<any>
  public cartCount = new Subject<any>
  constructor(private http: HttpClient) { }

  getSearchKey(searchKey: any) {
    this.searchKey.next(searchKey)
  }

  getGlass() {
    return this.http.get(`http://localhost:3000/Products`)
  }
  getproduct(glasses: any) {
    return this.http.post(`http://localhost:3000/Cart`, glasses)
  }
  getcart() {
    return this.http.get(`http://localhost:3000/Cart`)
  }

  updateCardData(data: any) {
    return this.http.put(`http://localhost:3000/Cart/${data.id}`, data)
  }

  deleteCardData(id: number) {
    return this.http.delete(`http://localhost:3000/Cart/` + id)
  }


  cartlist: any
  getcartCount() {
    this.http.get(`http://localhost:3000/Cart`).subscribe(res => {
      this.cartlist = res
      let count = this.cartlist.length
      this.cartCount.next(count)
      console.log(this.cartlist);

    })
  }
}
