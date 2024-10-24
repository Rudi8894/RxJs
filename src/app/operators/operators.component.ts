import { Component, OnInit } from '@angular/core';
import { filter, from, map, of, Subscription, take, tap, timer } from 'rxjs';

@Component({
  selector: 'app-operators',
  standalone: true,
  imports: [],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.css'
})
export class OperatorsComponent implements OnInit {
  subApple!: Subscription
 ngOnInit(): void {
  //  of(2,6,4,5)
  //   .pipe(
  //     map(i=> i *3),
  //     tap(i=> console.log(i)),
  //     take(3)
  //   ).subscribe(i=> console.log(i));

    of(2,4,6)
      .pipe(
        map(i=> i * 3),
        map(i=> i + 5)
      ).subscribe(i=> console.log(i));

    of(2,4,6)
      .pipe(
        map(i=>{
          i = i *3;
          return i+ 5;
        })
      ).subscribe(i=> console.log(i));
      const apple$ = from([
        {id: 1, type:'macintosch'},
        {id: 2, type:'gala'},
        {id: 3, type:'fuji'},
      ]);
      this.subApple = apple$.pipe(
          map(a=> {
            return {...a, color: 'red'}
          })
      ).subscribe(a=> console.log(a));

      of(2,4,5,6).pipe(
        filter(f=> f % 2===0),
        tap(i=> console.log(i))
      ).subscribe();

      // start with number 0 and warit for 1 second to emmit the next item
      timer(0,1000).pipe(
        take(4)
      ).subscribe({
        next: i=> console.log(i),
        error: err=> console.log(err),
        complete: ()=> console.log('completed')
      });

 }

 

}
