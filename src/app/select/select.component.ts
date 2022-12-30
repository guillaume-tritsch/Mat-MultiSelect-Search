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
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  // ==== Parameters ==== //

  @Input() placeholder: string = '';

  @Input() options: Option[]; // options list

  @Input() ngModel: string = '';

  @Output() ngModelChange: EventEmitter<string> = new EventEmitter<string>();

  // ==== Public variables ==== //

  // Search systeme //
  @ViewChild('searchInput') searchInput;

  @ViewChild('selectElement') selectElement;

  public searchContent: string = ''; // Content of search input

  public filteredOptions: Option[] = [];

  public otherOptions: Option[] = [];

  constructor() {}

  ngOnInit() {
    this.ngModel;

    this.filterOptions();
  }

  ngAfterViewInit() {}

  // public method

  public onOptionClick(element): void {
    if (
      !element.disabled &&
      this.everyValueAInB([element], this.filteredOptions)
    ) {
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

  /*
   * filter all option with search content
   */
  public filterOptions(): void {
    let filter = this.searchContent.toLowerCase(); // search content

    //
    this.filteredOptions = this.options.filter((option) =>
      option['label'].toLowerCase().includes(filter)
    );

    // remove all filteredOption of option array
    this.otherOptions = this.subtractTwoArray(
      this.options,
      this.filteredOptions
    );

    // sort all option of filterOptions array on label property
    this.filteredOptions = this.sortObjectArray(this.filteredOptions, 'label');

    // sort all option of otherOptions array on label property
    this.otherOptions = this.sortObjectArray(this.otherOptions, 'label');
  }

  public setSearchFocus(): void {
    this.searchInput.nativeElement.focus();
  }

  // private

  /*
   * Get value array of all option in array
   */
  private getValueArray(optionArray: Option[]): any[] {
    return optionArray.map((option) => option.value);
  }

  /*
   * Get label array of all option in array
   */
  private getLabelArray(optionArray: Option[]): string[] {
    return optionArray.map((option) => option.label);
  }

  /*
   * Remove all disabled option in options array
   */
  private removeDisabledOptions(optionArray: Option[]): Option[] {
    return optionArray.filter((option) => !option.disabled);
  }

  /*
   * Compare two array of value
   */
  private everyValueAInB(arrayA: any[], arrayB: any[]): boolean {
    return arrayA.every((a) => arrayB.indexOf(a) !== -1);
  }

  /*
   * Sort array of object by property
   */
  private sortObjectArray(array: Option[], property: any): Option[] {
    return array.sort((a, b) => a.label.localeCompare(b[property]));
  }

  /*
   *
   */
  private subtractTwoArray(arrayA: Option[], arrayB: Option[]): Option[] {
    return arrayA.filter((option) => !(arrayB.indexOf(option) !== -1));
  }

  /*
   * Emit new value
   */
  private valueChange(): void {
    this.ngModelChange.emit(this.ngModel);
  }
}
