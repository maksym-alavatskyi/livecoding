import { Controller, Post, Delete, Get, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('add')
  addProduct(
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
  ) {
    return this.productsService.addProduct(name, price, description);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: number) {
    return this.productsService.deleteProduct(Number(id));
  }

  @Get()
  fetchProducts() {
    return this.productsService.fetchProducts();
  }
}
