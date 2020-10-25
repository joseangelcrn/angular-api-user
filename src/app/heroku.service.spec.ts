import { TestBed } from '@angular/core/testing';

import { HerokuService } from './heroku.service';

describe('HerokuService', () => {
  let service: HerokuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerokuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
