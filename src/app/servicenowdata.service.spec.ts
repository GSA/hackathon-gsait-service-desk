import { TestBed } from '@angular/core/testing';

import { ServicenowdataService } from './servicenowdata.service';

describe('ServicenowdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicenowdataService = TestBed.get(ServicenowdataService);
    expect(service).toBeTruthy();
  });
});
