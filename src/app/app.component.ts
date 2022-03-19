import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes!: number;
  counterSubscription!: Subscription;

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }


    //   ngOnInit() {
    //     const counter = Observable.interval(1000);
    //     counter.subscribe(
    //       (value) => {
    //         this.secondes = value;
    //       },
    //       (error) => {
    //         console.log('Uh-oh, an error occurred! : ' + error);
    //       },
    //       () => {
    //         console.log('Observable complete!');
    //       }
    //     );
    // }
  }
  