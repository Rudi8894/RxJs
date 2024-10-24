import { TestBed } from '@angular/core/testing';

import { CartShellService } from './cart-shell.service';

describe('CartShellService', () => {
  let service: CartShellService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartShellService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
