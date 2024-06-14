import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { CommonService } from "../service/common.service";
import { SelectedCar } from "../model/SelectedCar";


export function step3Guard(): CanActivateFn {
    return () => {
    let router = inject(Router);
    let commonService = inject(CommonService);
    var isActive:boolean =false;
    commonService.SelectedCarObservable.subscribe((selectedCar : SelectedCar)=> isActive= !selectedCar.notSelectedConfig());
    if (!isActive){
      router.navigateByUrl('/Step2');
    }
    return isActive;
    };
  }