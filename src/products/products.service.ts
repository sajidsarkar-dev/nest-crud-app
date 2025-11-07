import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private productsList = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' }
  ];

  constructor() { }

  getAllProducts(): any[] {
    return this.productsList;
  }

  findProductById(id: number): any {
    return this.productsList.find(product => product.id === id);
  }

  createProduct(productData: any): any {
    const newProduct = {
      id: this.productsList.length + 1,
      ...productData
    };
    this.productsList.push(newProduct);
    return newProduct;
  }
}
