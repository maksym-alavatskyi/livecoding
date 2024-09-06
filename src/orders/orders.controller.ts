import { Controller, Post, Delete, Get, Body, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { UsersService } from 'src/users/users.service';
import { ProductsService } from 'src/products/products.service';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService, 
    private readonly userService: UsersService, 
    private readonly productService: ProductsService) {}

  @Post('add')
  addOrder(
    @Body('userId') userId: number,
    @Body('productIds') productIds: number[],
    @Body('totalAmount') totalAmount: number,
  ) {
    return this.ordersService.addOrder(userId, productIds, totalAmount);
  }

  @Delete(':id')
  deleteOrder(@Param('id') id: number) {
    return this.ordersService.deleteOrder(Number(id));
  }

  @Get()
  fetchOrders() {
    return this.ordersService.fetchOrders();
  }
}
