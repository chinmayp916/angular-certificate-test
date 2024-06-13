import { Routes } from '@angular/router';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { step2Guard } from './guards/step-2.guard';
import { step3Guard } from './guards/step-3.guard';

export const routes: Routes = [
    {path: 'Step1' , component: Step1Component},
    {path: 'Step2' , component: Step2Component, canActivate : [step2Guard()]},
    {path: 'Step3' , component: Step3Component, canActivate : [step3Guard()]},
    {path: '' , component: Step1Component},
    {path: '**', component: Step1Component}
];

