import { Card } from "./card";
import { Gender } from "./enums/gender";

export class Customer{
  private _firstName: string;
  private _lastName: string;
  private _gender: Gender;
  private readonly _birthDate: Date;
  private _address: string;
  private _cards: Card[]

  constructor(
    firstName: string,
    lastName: string,
    gender: Gender,
    birthDate: Date,
    address: string,
    cards: Card[]
  ){
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._birthDate = birthDate;
    this._address = address;
    this._cards = cards;
  }

  public get fullname(): string{
    return `${this._lastName.toUpperCase()} ${this._firstName}`
  }

  public get cards(): Card[]{
    return this._cards;
  }
}
