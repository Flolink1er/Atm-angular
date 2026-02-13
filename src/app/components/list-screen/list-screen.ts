import { Component } from '@angular/core';
import { ListSteps } from '../../models/enums/list-steps';
import { LandingList } from '../landing-list/landing-list';
import { CreateUser } from '../create-user/create-user';
import { CreateCard } from '../create-card/create-card';

@Component({
  selector: 'app-list-screen',
  imports: [LandingList, CreateUser, CreateCard],
  templateUrl: './list-screen.html',
  styleUrl: './list-screen.scss',
})
export class ListScreen {
  public readonly ListSteps = ListSteps;
  public currentStep = ListSteps.LIST_HOME;
}
