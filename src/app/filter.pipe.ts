import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
 
  transform(value: any,filterstring:string, prop:string,depstring: string,prop2:string,areastring:string,prop3:string): any {
    const arr:any=[];
    
      if((filterstring)===""&&(depstring==="")&&(areastring==="")){
        return value;
      }
     
      for(const item of value ){
        if(item[prop2]===depstring){
          arr.push(item)
        }
       
      }
    
  for(const item of value ){
    if(item[prop]===filterstring){
      arr.push(item)
    }
   
  }
  for(const item of value ){
    if(item[prop3]===areastring){
      arr.push(item)
    }
   
  }
    return arr;
  }

}
