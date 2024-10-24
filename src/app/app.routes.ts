import { Routes } from '@angular/router';
import { ObservablesComponent } from './observables/observables.component';
import { OperatorsComponent } from './operators/operators.component';

export const routes: Routes = [
    {
        path:'',
        component: OperatorsComponent
    }
];
