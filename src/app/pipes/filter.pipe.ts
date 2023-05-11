import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allContacts:any[],serachKey:string,propertyname:string): any[]  {

    const result:any=[]
      if(!allContacts || serachKey=="" || propertyname==""){

        return allContacts
      }
    allContacts.forEach((item:any)=>{

      if(item[propertyname].trim().toLowerCase().includes(serachKey.trim().toLowerCase())){ 
        result.push(item)
      }
    })

    return result;
  }




  
}














