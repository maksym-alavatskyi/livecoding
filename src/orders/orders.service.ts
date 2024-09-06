import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { Product } from 'src/products/product.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async addOrder(userId: number, productIds: number[], totalAmount: number): Promise<Order> {
    const newOrder = this.ordersRepository.create({ userId, productIds, totalAmount });
    return this.ordersRepository.save(newOrder);
  }

  async deleteOrder(id: number): Promise<boolean> {
    const result = await this.ordersRepository.delete(id);
    return result.affected > 0;
  }

  async fetchOrders(): Promise<Order[]> {
    return this.ordersRepository.find();
  }
}
