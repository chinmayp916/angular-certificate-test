import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguratorService } from '../services/configurator.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component implements OnInit {
  models: any[] = [];
  colors: any[] = [];
  selectedModel: string | null = null;
  selectedColor: string | null = null;
  selectedImage: string | null = null;
  // step1Filled: any;
  @Input() step1Filled?: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private configuratorService: ConfiguratorService,
    private appComponent: AppComponent
  ) {}

  ngOnInit(): void {
    this.http.get('https://github.com/chinmayp916/angular-certificate-test/models').subscribe((data: any) => {
      this.models = data;
      this.setStoredData();
    });
    this.step1Filled = this.appComponent.step1Filled
  }

  setStoredData() {
    const storedModel = this.configuratorService.selectedModel;
    const storedColor = this.configuratorService.selectedColor;
    if (storedModel) {
      this.selectedModel = storedModel.code;
      this.onModelChange();
    }
    if (storedColor) {
      this.selectedColor = storedColor.code;
      this.onColorChange();
    }
  }

  onModelChange() {
    const selectedModel = this.models.find(
      (model) => model.code === this.selectedModel
    );

    this.colors = selectedModel ? selectedModel.colors : [];
    this.selectedColor = '';
    this.selectedImage = '';
    this.configuratorService.selectedModel = selectedModel;
    this.configuratorService.selectedModelCode = selectedModel.code;
    this.onColorChange();
  }

  onColorChange() {
    const selectedModel = this.models.find(
      (model) => model.code === this.selectedModel
    );
    let selectedColor = this.colors.find(
      (color) => color.code === this.selectedColor
    );
    selectedColor = selectedColor ? selectedColor : this.colors[0];
    
    if (selectedModel && selectedColor) {
      this.selectedImage =
        this.configuratorService.selectedImage = `https://interstate21.com/tesla-app/images/${selectedModel.code}/${selectedColor.code}.jpg`;
    }
    this.configuratorService.selectedColor = selectedColor;
  }

  updateSelectedImage(): void {
    if (this.selectedModel) {
      this.colors = this.models.find(
        (x: any) => x.code === this.selectedModel
      )?.colors;
      const color = this.colors.find((c) => c.code === this.selectedColor);
      this.selectedImage = color ? color.image : null;
    }
  }

  proceedToStep2(): void {
    if (this.selectedModel && this.selectedColor) {
      this.step1Filled = false;
      this.router.navigate(['/step2']);
    }
  }
}
