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
    { label: 'test', value: '1' },
    { label: 'test2', value: '2' },
    { label: 'test3', value: '3' },
  ];

  public selectedValue: Option[] = [];
}
