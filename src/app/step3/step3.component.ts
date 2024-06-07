import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguratorService } from '../services/configurator.service';

interface Config {
  code: string;
  name: string;
  range: number;
  maxSpeed: number;
  price: number;
}

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component implements OnInit {
  selectedModel: any;
  selectedConfig: any;
  selectedColor: any;
  selectedImage: any;
  towHitch: boolean = false;
  yoke: boolean = false;
  totalCost: number = 0;

  constructor(
    private configuratorService: ConfiguratorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.selectedModel = this.configuratorService.selectedModel;
    this.selectedConfig = this.configuratorService.selectedConfig;
    this.selectedColor = this.configuratorService.selectedColor;
    this.selectedImage = this.configuratorService.selectedImage;
    this.towHitch = this.configuratorService.towHitch;
    this.yoke = this.configuratorService.yoke;

    if (!this.selectedModel || !this.selectedConfig || !this.selectedColor) {
      this.router.navigate(['/step1']);
      return;
    }

    this.calculateTotalCost();
  }

  navigateToStep1() {
    this.router.navigate(['/step1']);
  }

  navigateToStep2() {
    this.router.navigate(['/step2']);
  }

  // getConfigDetails(configCode: string): any {
  //   // This is a placeholder method to simulate fetching config details
  //   // Replace this with an actual API call if needed
  //   const configs: Config[] = [
  //     {
  //       code: 'config1',
  //       name: 'Standard',
  //       range: 250,
  //       maxSpeed: 150,
  //       price: 80000,
  //     },
  //     {
  //       code: 'config2',
  //       name: 'Long Range',
  //       range: 350,
  //       maxSpeed: 160,
  //       price: 90000,
  //     },
  //     {
  //       code: 'config3',
  //       name: 'Performance',
  //       range: 300,
  //       maxSpeed: 180,
  //       price: 100000,
  //     },
  //   ];
  //   return configs.find((config) => config.code === configCode) || null;
  // }

  calculateTotalCost(): void {
    if (this.selectedConfig) {
      this.totalCost = this.selectedConfig.price;
      this.totalCost += 6500;
      if (this.towHitch) {
        this.totalCost += 1000;
      }
      if (this.yoke) {
        this.totalCost += 1000;
      }
    }
  }
}
