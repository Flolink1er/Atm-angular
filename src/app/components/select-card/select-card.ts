import { Component, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOMERS } from '../../models/data/customers.mock';
import { Customer } from '../../models/customers';
import { MatCardModule } from '@angular/material/card';
import { Card } from '../../models/card';

@Component({
  selector: 'app-select-card',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatCardModule],
  templateUrl: './select-card.html',
  styleUrl: './select-card.scss',
})
export class SelectCard {
  public change = output();
  public customers : Customer[] = CUSTOMERS
  public cardPicked = output<Card>();

  public nextStep() {
    this.change.emit();
  }

  public chooseCard(card : Card): void{
    this.cardPicked.emit(card);
  }
}
