import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductVariant} from '../../product/components/domain';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getProductVariantsByProductId(productId: string) {
    return this.http.get<ProductVariant[]>(`${environment.baseUrl}/productVariants`, {params: {productId ,_expand: 'product', _embed: 'productVariantImages'}});
  }
}
