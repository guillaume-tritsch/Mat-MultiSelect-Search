import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { Option } from './../option';
@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.css'],
})
export class MSelectComponent implements OnInit, AfterViewInit {
  // ==== Parameters ==== //

  @Input() options: Option[]; // options list

  @Input() ngModel: string[] = [];

  @Output() ngModelChange: EventEmitter<string[]> = new EventEmitter<
    string[]
  >();

  // ==== Public variables ==== //

  // Search systeme //
  @ViewChild('searchInput') searchInput;

  public searchContent: string = ''; // Content of search input

  public filteredOptions: Option[] = [];

  public otherOptions: Option[] = [];

  // Checkbox systeme //
  @ViewChild('checkboxSelectAll') checkboxSelectAll;

  @ViewChild('selectElement') selectElement;

  constructor() {}

  ngOnInit() {
    this.ngModel;

    this.filterOptions();
  }

  ngAfterViewInit() {
    this.setMainCheckboxStat();
  }

  // public method

  public onOptionClick(element): void {
    if (!element.disabled) {
      this.setMainCheckboxStat();
      this.valueChange();
    }
  }

  public onResetButtonClick(): void {
    this.searchContent = '';
    this.filterOptions();
  }

  // private method

  public onOpenedChange() {
    if (this.selectElement.panelOpen) {
      this.selectElement.panel.nativeElement.scrollTop = 0;
    }
  }

  filterOptions() {
    let filter = this.searchContent.toLowerCase();
    this.filteredOptions = this.options.filter((option) =>
      option['label'].toLowerCase().includes(filter)
    );

    this.otherOptions = this.options.filter(
      (option) => !(this.filteredOptions.indexOf(option) !== -1)
    );

    this.filteredOptions = this.filteredOptions.sort((a, b) =>
      a.label.localeCompare(b.label)
    );
    this.otherOptions = this.otherOptions.sort((a, b) =>
      a.label.localeCompare(b.label)
    );
  }

  public toggleAll(isSelect: boolean): void {
    if (isSelect) {
      this.ngModel = this.getValueArray(
        this.options.filter((m) => !m.disabled)
      );
    } else {
      this.ngModel = [];
    }
    this.valueChange();
  }

  private setMainCheckboxStat(): void {
    if (
      this.options
        .filter((m) => !m.disabled)
        .map((a) => a.value)
        .every((a) => this.ngModel.indexOf(a) !== -1)
    ) {
      this.checkboxSelectAll.indeterminate = false;
      this.checkboxSelectAll.checked = true;
    } else if (this.ngModel.toString() === '') {
      this.checkboxSelectAll.indeterminate = false;
      this.checkboxSelectAll.checked = false;
    } else {
      this.checkboxSelectAll.indeterminate = true;
      this.checkboxSelectAll.checked = false;
    }
  }

  private valueChange(): void {
    this.ngModelChange.emit(this.ngModel);
  }

  private getValueArray(optionArray: Option[]): string[] {
    return optionArray.map((a) => a.value);
  }

  public setSearchFocus(): void {
    this.searchInput.nativeElement.focus();
  }
}
