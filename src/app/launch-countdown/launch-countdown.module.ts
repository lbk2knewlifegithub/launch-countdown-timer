import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CardComponent,
  CountdownComponent, DigitComponent, SocialsComponent
} from './components';
import { LaunchCountdownPageComponent } from './containers';
import { LaunchCountdownRoutingModule } from './launch-countdown-routing.module';

const COMPONENTS = [
  CardComponent,
  CountdownComponent,
  SocialsComponent,
  DigitComponent,
];

const CONTAINERS = [LaunchCountdownPageComponent];

@NgModule({
  imports: [CommonModule, RouterModule, LaunchCountdownRoutingModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class LaunchCountDownModule {}
