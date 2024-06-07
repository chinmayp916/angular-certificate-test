import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguratorService } from '../services/configurator.service';

interface Config {
  id: number;
  description: string;
  range: number;
  speed: number;
  price: number;
}

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component implements OnInit {
  configs: Config[] = [];
  selectedConfig: any | null = null;
  towHitch: boolean = false;
  yoke: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private configuratorService: ConfiguratorService
  ) {}

  ngOnInit(): void {
    if (
      !this.configuratorService.selectedModel ||
      !this.configuratorService.selectedColor
    ) {
      this.router.navigate(['/step1']);
      return;
    }
    const selectedModel = this.configuratorService.selectedModel;
    if (selectedModel) {
      const selectedModelCode = this.configuratorService.selectedModelCode; // Get the selected model code from the previous step
      this.http
        .get(
          `https://github.com/chinmayp916/angular-certificate-test/options/${selectedModelCode}`
        )
        .subscribe((data: any) => {
          this.configs = data.configs;
          this.towHitch = data.towHitch;
          this.yoke = data.yoke;
        });
    }
  }

  onConfigChange() {
    this.configuratorService.selectedConfig = this.selectedConfig;
  }

  onYokeChange() {
    this.configuratorService.yoke = this.yoke;
  }

  onTowHitchChange() {
    this.configuratorService.towHitch = this.towHitch;
  }

  backToStep1(): void {
    if (this.selectedConfig) {
      this.router.navigate(['/step1']);
    }
  }

  proceedToStep3(): void {
    if (this.selectedConfig) {
      this.configuratorService.selectedConfig = this.selectedConfig;
      this.configuratorService.towHitch = this.towHitch;
      this.configuratorService.yoke = this.yoke;
      this.router.navigate(['/step3']);
    }
  }
}
