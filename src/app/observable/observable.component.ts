import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'observable',
  imports: [],
  templateUrl: './observable.component.html'
})
export class ObservableComponent {
  sorce: Observable<number>=new Observable((observer)=>{
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(()=>{
      observer.next(4);
    },3000);
    //observer.complete();
    observer.error("error");
  })
    x!:number;
  constructor(){
    this.sorce.pipe(map(x=>{return x*3;}))
    .subscribe(value=>{
      this.x=value;
      console.log(value);
    },
  error=>{
      console.log(error);
    },
    ()=>{
      console.log("complete");
    })
  }
}
