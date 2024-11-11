import { Component, OnDestroy, OnInit } from '@angular/core';
import { concat, concatMap, delay, from, fromEvent, map, mergeMap, of, pipe, range, Subscription, switchMap } from 'rxjs';

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
    
    // range(1, 5).pipe(
    //   concatMap(i=> of(i).pipe(
    //     delay(this.randomDelay())
    //   ))
    // ).subscribe(v=> console.log('concatMap', v));

    // range(11, 5).pipe(
    //   mergeMap(i=> of(i).pipe(
    //     delay(this.randomDelay())
    //   ))
    // ).subscribe(v=> console.log('mergeMap', v));

    range(21, 5).pipe(
      switchMap(i=> of(i).pipe(
        delay(this.randomDelay())
      ))
    ).subscribe(v=> console.log('switchMap', v));

    /**
     * conact map is used to execute sub-observable in serial operation
     * merge map is giving items which first finished 
     * switch map is like the other higher order operator is just transform emitted item to inner obersrvable
     */


    // const subObs$ = of(2,4,6,8); // observable
    // const subArrayObs$ = of([2,4,6,8]); // observable

    // this.sub =  subObs$.subscribe(item=>{
    //   console.log(item);
    // });
    // this.subArray = subArrayObs$.subscribe(arr=>{
    //   console.log(arr);
    // });


    // this.subFrom = from([20,15,20,10]).subscribe({
    //   next: (item)=>{
    //     console.log('item from ', item);
    //   },
    //   error: (err)=>{
    //     console.log(err);
    //   },
    //   complete: ()=>{
    //     console.log('completed, no items anymore');
    //   }
      
    // });

    
    // // const observer = {                     // observer declaration
    // //   next: (item)=>{
    // //     console.log('item from ', item);
    // //   },
    // //   error: (err)=>{
    // //     console.log(err);
    // //   },
    // //   complete: ()=>{
    // //     console.log('completed, no items anymore');
    // //   }
      
    // // }

    

    // this.subEvent = fromEvent(document, 'click').subscribe({
    //   next: ev=> console.log('Click event', ev.target),
    //   error: err=>console.log('Error:', err),
    //   complete: ()=> console.log('no more event')

    //});


    this.subKey = fromEvent(document, 'keydown').subscribe(
      {
        next: (key)=> console.log('Key Pressed', (key as KeyboardEvent),key)
      }
    );




  }
  randomDelay(){
    return Math.floor(Math.random() * 1000 + 500);
  }



  ngOnDestroy(): void {
    this.subEvent?.unsubscribe();
    this.sub?.unsubscribe();
    this.subArray?.unsubscribe();
    this.subFrom?.unsubscribe();
    this.subKey.unsubscribe();

  }
}
