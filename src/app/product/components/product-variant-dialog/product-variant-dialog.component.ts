import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductVariant} from '../domain';
import {DialogService} from '../../../dialog/services';

@Component({
  selector: 'app-product-variant-dialog',
  templateUrl: './product-variant-dialog.component.html',
  styleUrls: ['./product-variant-dialog.component.css']
})
export class ProductVariantDialogComponent implements OnInit {
  @Input() variants: ProductVariant[] = [];
  @Output() formSubmitted: EventEmitter<any>;
  @Output() selectedVariantIndex = 0;
  @Output() selected: EventEmitter<number>;
  count = 0;

  get selectedVariantImage() {
    if (this.selectedVariantIndex < 0 || this.variants.length === 0) {
      return 0;
    }
    return this.variants[this.selectedVariantIndex].productVariantImages[0].imgUrl;
  }

  get selectedVariantName() {
    if (this.selectedVariantIndex < 0 || this.variants.length === 0) {
      return 0;
    }
    return this.variants[this.selectedVariantIndex].name;
  }

  get price() {
    if (this.selectedVariantIndex < 0 || this.variants.length === 0) {
      return '';
    }
    return this.variants[this.selectedVariantIndex].price;
  }

  constructor(private dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

  handleSelection(i: number) {
    this.selectedVariantIndex = i;
    this.selected.emit(this.selectedVariantIndex);
  }

  handleAmountChange(count: number) {
    this.count = count;
  }

  handleConfirm() {
    if (this.selectedVariantIndex < 0 || this.variants.length === 0) {
      return;
    }
    this.formSubmitted.emit({
      variant: this.variants[this.selectedVariantIndex],
      count: this.count
    });
    this.dialogService.close();
  }
}
