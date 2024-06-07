/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConfiguratorService } from './configurator.service';

describe('Service: Configurator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfiguratorService]
    });
  });

  it('should ...', inject([ConfiguratorService], (service: ConfiguratorService) => {
    expect(service).toBeTruthy();
  }));
});
