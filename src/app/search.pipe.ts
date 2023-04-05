import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product:any[], searchString:any): any[] {
    console.log("///",product);
    console.log(searchString);
    
    
   if(!searchString) 
   {
    return product;
  }
   else{
    let result:any[]=[]
    result=product.filter((data:any)=>{
      if(data.title.toLowerCase().includes(searchString.toLowerCase()))
      {
        return data
      }
    })
    return result
   }

  }
}
