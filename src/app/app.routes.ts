import { Routes } from '@angular/router';
import { PainelComponent } from './componentes/painel/painel.component';

export const routes: Routes = [
    { path: '', redirectTo: 'painel', pathMatch: 'full' },
    { path: 'painel', component: PainelComponent },
];
