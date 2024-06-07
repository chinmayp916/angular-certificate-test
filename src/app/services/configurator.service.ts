import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfiguratorService {
  public selectedModel: any;
  public selectedModelCode: any;
  public selectedColor: any;
  public selectedImage: any;
  public selectedConfig: any;
  public yoke: boolean = false;
  public towHitch: boolean = false;

  constructor() {}
}

