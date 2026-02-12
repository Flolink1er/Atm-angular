import { Component } from '@angular/core';
import { AtmScreen } from '../../components/atm-screen/atm-screen';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-atm',
  imports: [AtmScreen, RouterOutlet],
  templateUrl: './atm.html',
  styleUrl: './atm.scss',
})
export class Atm {

}
