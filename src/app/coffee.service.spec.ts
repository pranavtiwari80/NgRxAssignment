import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

import { CoffeeService } from './coffee.service';
import { ICoffee } from './coffee'
import { Observable } from 'rxjs';

describe('CoffeeService', () => {
  let service: CoffeeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule, HttpClientTestingModule]});
    service = TestBed.inject(CoffeeService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getCoffeeList method of service should return expected data', (done) => {
    const expectedData: ICoffee[] = [
      {
        id: 4516,
        uid: "c291051a-32b8-443f-abbf-c0a2d3561b68",
        blend_name: "Split Breaker",
        origin: "Tecapa-Chinameca, El Salvador",
        intensifier: "COMPLEX",
        variety: "Mokka",
        notes: "deep, coating, cherry, cream, sage",
      }
    ];

    service.getCoffeeList().subscribe(data => {
      expect(data).toEqual(expectedData);
      done();
    });
	  const dataAPI = `${service.coffeeListUrl}`;
    const testRequest = httpTestingController.expectOne(dataAPI);

    testRequest.flush(expectedData);
  });
  it('#getCoffeeList should use GET to retrieve data', () => {
    service.getCoffeeList().subscribe();
    const dataAPI = `${service.coffeeListUrl}`;
    const testRequest = httpTestingController.expectOne(dataAPI);
    expect(testRequest.request.method).toEqual('GET');
  });


});
