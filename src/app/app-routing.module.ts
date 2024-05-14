
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [

  { path: '', component: WeatherComponent, pathMatch: 'full' },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }];

export const appRoutingModule = RouterModule.forRoot(routes);
export const routingComponents = [WeatherComponent]
