import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Option } from './../option';
@Component({
  selector: 'app-m-select',
  templateUrl: './m-select.component.html',
  styleUrls: ['./m-select.component.css'],
})
export class MSelectComponent implements OnInit {
  @Input() options: Option[];

  @Input() ngModel: Option[] = [];
  @Output() ngModelChange: EventEmitter<Option[]> = new EventEmitter<
    Option[]
  >();

  public selectedValue: any[] = [];

  @ViewChild('checkboxSelectAll') checkboxSelectAll;

  constructor() {}

  ngOnInit() {
    this.selectedValue = this.ngModel;
    console.log(this.ngModel);
  }

  toggleAll(isSelect: boolean) {
    if (isSelect) {
      this.selectedValue = this.getValueArray(this.options);
    } else {
      this.selectedValue = [];
    }
  }

  setAllSelectedCheckboxStat() {
    if (
      this.selectedValue.toString() ===
      this.options.map((a) => a.value).toString()
    ) {
      this.checkboxSelectAll.indeterminate = false;
      this.checkboxSelectAll.checked = true;
    } else if (this.selectedValue.toString() === '') {
      this.checkboxSelectAll.indeterminate = false;
      this.checkboxSelectAll.checked = false;
    } else {
      this.checkboxSelectAll.indeterminate = true;
      this.checkboxSelectAll.checked = false;
    }
  }

  valueChange() {
    this.ngModelChange.emit(this.ngModel);
  }

  getValueArray(optionArray: Option[]) {
    return optionArray.map((a) => a.value);
  }
}
