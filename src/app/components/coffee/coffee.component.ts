import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ChangeDetectionStrategy} from '@angular/core';
import { ICoffee } from './../../coffee';
import { Store, select } from '@ngrx/store';
import * as CoffeeActions from './../../actions/coffee.actions';
import * as fromCoffee from './../../selectors/coffee.selectors';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent  implements OnInit, AfterViewInit{
  p: number = 1;
  pageTitle: string = 'Coffee Item List';
  errorMessage: string =  '';
  coffeeList: ICoffee[] = [];
  response: boolean = false;
  constructor(private store: Store<any>) { }

  ngAfterViewInit(){

  }

  ngOnInit(): void {
    this.listCoffeeItems();
  }
  listCoffeeItems() {
    this.store.dispatch(new CoffeeActions.LoadCoffees()); // action dispatch

    this.store.pipe(select(fromCoffee.getCoffees)).subscribe(
      cofeeLst => {
        this.coffeeList = cofeeLst;
      }
    )

    this.store.pipe(select(fromCoffee.getError)).subscribe(
      err => {
         this.errorMessage = err;
      }
    )
  }
}
