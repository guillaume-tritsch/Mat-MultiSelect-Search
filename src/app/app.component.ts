import { Component, VERSION } from '@angular/core';
import { Option } from './option';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public disabledFranceA: boolean = false;

  public value: Option[] = [
    { label: 'France', value: 'france', disabled: this.disabledFranceA },
    { label: 'Autriche', value: 'autriche', disabled: true },
    { label: 'Allemagne', value: 'allemagne' },
    { label: 'Angleterre', value: 'angleterre' },
    { label: 'Etas Unis', value: 'etas unis' },
    { label: 'Colombie', value: 'colombie' },
    { label: 'Chine', value: 'chine' },
    { label: 'Russie', value: 'russie' },
    { label: 'Pologne', value: 'pologne' },
    { label: 'Roumanie', value: 'roumanie' },
    { label: 'Ukraine', value: 'ukraine' },
    { label: 'Cuba', value: 'cuba' },
    { label: 'Espagne', value: 'espagne' },
    { label: 'Moldavie', value: 'moldavie' },
    { label: 'Italie', value: 'italie' },
  ];

  public placeholderA: string = 'Choisir un pays';
  public disabledA: boolean = false;

  public selectedValue: any[] = ['italie', 'moldavie'];
  public selectedValueB: string = 'italie';

  public maj() {
    this.value[0].disabled = this.disabledFranceA;
  }

  printInConsole() {
    console.log(this.selectedValue);
  }
}
