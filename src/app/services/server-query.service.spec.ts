import { TestBed } from '@angular/core/testing';

import { ServerQueryService } from './server-query.service';

describe('ServerQueryService', () => {
  let service: ServerQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
