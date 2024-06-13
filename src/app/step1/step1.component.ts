import { Component, OnInit } from '@angular/core';
import { CarDetailsService } from '../service/car-details.service';
import { CommonService } from '../service/common.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Model } from '../model/Model';
import { Color } from '../model/Color';
import { SelectedCar } from '../model/SelectedCar';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component implements OnInit{
 
  carModels: Array<Model> =[];

  selectedModel?:Model;
  selectedColor?:Color;

  selectedCar:SelectedCar=new SelectedCar();

  constructor(private carDetailsService:CarDetailsService, private commonService:CommonService){}
 
  ngOnInit(){
    this.commonService.SelectedCarObservable.subscribe(
      (selectedCar:SelectedCar) =>
      { 
        this.selectedCar=selectedCar;
        this.carDetailsService.getCarModels().subscribe(
          data =>
          {
            this.carModels=data;
            this.selectedModel=this.carModels.find(x=> x.code == this.selectedCar.model?.code);
            this.selectedColor=this.selectedModel?.colors.find(x=>x.code == this.selectedCar.color?.code); 
          }
        );
      }
    );
  }

  onSelectColorChange(){
    this.selectedCar.color=this.selectedColor;
    this.commonService.SelectedCar(this.selectedCar);
  }

  onSelectModelChange(){
    this.selectedColor=undefined;
    this.selectedCar=new SelectedCar();
    this.selectedCar.model=this.selectedModel;
    this.commonService.SelectedCar(this.selectedCar);
  }
}
