import {Product} from '../../../shared/domain';
import {ImageSlider} from '../../../shared/components/images-slider';

export interface ProductVariant {
  id: number | string;
  product: Product;
  name: string;
  price: number;
  listPrice: number;
  productVariantImages:  ImageSlider[]
}
export interface GroupOrder {
  id: number;
  startBy: string;
  avatar: string;
  startAt: Date;
  remainingNumber: number;
  productId: number;
}
