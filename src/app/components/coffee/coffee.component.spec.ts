import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store, StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination'; // At the top of your module
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { By } from '@angular/platform-browser';
import { CoffeeComponent } from './coffee.component';
import { ICoffee } from 'src/app/coffee';


describe('CoffeeComponent', () => {
  let component: CoffeeComponent;
  let fixture: ComponentFixture<CoffeeComponent>;
  let store: MockStore;
  let icoffee: ICoffee;
  const initialState = {
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}), NgxPaginationModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      declarations: [ CoffeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
      declarations: [CoffeeComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CoffeeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    spyOn(store, 'dispatch').and.callFake(() => {});
  });
 it('should have a valid constructor', () => {
    expect(component).not.toBeNull();
});


  it('Should create Coffee Component', () => {
    expect(component).toBeTruthy();
  });

  it('Title Matches on Coffee Component', () => {
    const fixture = TestBed.createComponent(CoffeeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content')?.textContent).toContain('Coffee Item List');
  });
  it('expects the error message be be null', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(component.errorMessage).toEqual('');
  });
  it('default page is set for pagination', () => {
    expect(component.p).toEqual(1);
  });

});
