/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminPizzaService } from './admin-pizza.service';

describe('AdminPizzaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminPizzaService]
    });
  });

  it('should ...', inject([AdminPizzaService], (service: AdminPizzaService) => {
    expect(service).toBeTruthy();
  }));
});
