import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumoApiComponent } from './consumo-api/consumo-api.component';

const routes: Routes = [
  {
    path: 'index', component: ConsumoApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
