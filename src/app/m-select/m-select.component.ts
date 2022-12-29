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
  // ==== Parameters ==== //

  @Input() options: Option[]; // options list

  @Input() ngModel: Option[] = [];

  @Output() ngModelChange: EventEmitter<Option[]> = new EventEmitter<
    Option[]
  >();

  // ==== Public variables ==== //
  public selectedValue: any[] = [];

  // Search systeme //
  @ViewChild('searchInput') searchInput;

  public searchContent: string = ''; // Content of search input

  public filteredOptions: Option[] = [];

  public otherOptions: Option[] = [];

  // Checkbox systeme //
  @ViewChild('checkboxSelectAll') checkboxSelectAll;

  constructor() {}

  ngOnInit() {
    this.selectedValue = this.ngModel;
    console.log(this.ngModel);

    this.filteredOptions = this.options;
  }

  filterOptions() {
    let filter = this.searchContent.toLowerCase();
    this.filteredOptions = this.options.filter((option) =>
      option['label'].toLowerCase().includes(filter)
    );

    this.otherOptions = this.options.filter(
      (option) => !(this.filteredOptions.indexOf(option) !== -1)
    );
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

  setSearchFocus() {
    this.searchInput.nativeElement.focus();
  }

  removeSearchContent() {
    this.searchContent = '';
    this.filterOptions();
  }
}
