import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(
    private productsService: ProductsService
  ) { }

  @Get()
  getAllProducts(): any[] {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: number | string): any {
    return this.productsService.findProductById(Number(id));
  }

  @Post()
  createProduct(@Body() product: any): any {
    return this.productsService.createProduct(product);
  }
}
