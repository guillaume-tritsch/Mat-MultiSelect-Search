import { Component, VERSION } from '@angular/core';
import { Option } from './option';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  public value: Option[] = [
    { label: 'France', value: '1' },
    { label: 'Autriche', value: '2' },
    { label: 'Allemagne', value: '3' },
    { label: 'Angleterre', value: '4' },
    { label: 'Etas Unis', value: '5' },
    { label: 'Colombie', value: '6' },
    { label: 'Chine', value: '15' },
    { label: 'Russie', value: '25' },
    { label: 'Pologne', value: '34' },
    { label: 'Roumanie', value: '18' },
    { label: 'Ukraine', value: '24' },
    { label: 'Cuba', value: '33' },
    { label: 'Espagne', value: '11' },
    { label: 'Moldavie', value: '25' },
    { label: 'Italie', value: '37' },
  ];

  public selectedValue: Option[] = [];
}
