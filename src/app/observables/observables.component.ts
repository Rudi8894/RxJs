import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, fromEvent, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [],
  templateUrl: './observables.component.html',
})
export class ObservablesComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  subArray!: Subscription;
  subFrom!: Subscription;
  subEvent!: Subscription;
  subKey!: Subscription;

  ngOnInit(): void {
    const subObs$ = of(2,4,6,8); // observable
    const subArrayObs$ = of([2,4,6,8]); // observable

    this.sub =  subObs$.subscribe(item=>{
      console.log(item);
    });
    this.subArray = subArrayObs$.subscribe(arr=>{
      console.log(arr);
    });


    this.subFrom = from([20,15,20,10]).subscribe({
      next: (item)=>{
        console.log('item from ', item);
      },
      error: (err)=>{
        console.log(err);
      },
      complete: ()=>{
        console.log('completed, no items anymore');
      }
      
    });

    
    // const observer = {                     // observer declaration
    //   next: (item)=>{
    //     console.log('item from ', item);
    //   },
    //   error: (err)=>{
    //     console.log(err);
    //   },
    //   complete: ()=>{
    //     console.log('completed, no items anymore');
    //   }
      
    // }

    

    this.subEvent = fromEvent(document, 'click').subscribe({
      next: ev=> console.log('Click event', ev.target),
      error: err=>console.log('Error:', err),
      complete: ()=> console.log('no more event')

    });


    this.subKey = fromEvent(document, 'keydown').subscribe(
      {
        next: (key)=> console.log('Key Pressed', (key as KeyboardEvent),key)
      }
    );




  }
  ngOnDestroy(): void {
    this.subEvent?.unsubscribe();
    this.sub?.unsubscribe();
    this.subArray?.unsubscribe();
    this.subFrom?.unsubscribe();
    this.subKey.unsubscribe();

  }
}
