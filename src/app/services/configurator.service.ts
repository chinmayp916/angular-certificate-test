import { Injectable } from '@angular/core';
import { Model } from '../model/Model';
import { Color } from '../model/Color';
import { Config } from '../model/Config';
import { SelectedCar } from '../model/SelectedCar';
import { Option } from '../model/Option';

@Injectable({
  providedIn: 'root',
})
export class ConfiguratorService {
  public selectedModel: Model | null = null;
  public selectedModelCode: Option | null = null;
  public selectedColor: Color | null = null;
  public selectedImage: SelectedCar | null = null;
  public selectedConfig: Config | null = null;
  public yoke: boolean = false;
  public towHitch: boolean = false;

  constructor() {}
}

