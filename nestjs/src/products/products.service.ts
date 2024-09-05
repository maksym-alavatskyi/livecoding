import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async addProduct(name: string, price: number, description: string): Promise<Product> {
    const newProduct = this.productsRepository.create({ name, price, description });
    return this.productsRepository.save(newProduct);
  }

  async deleteProduct(id: number): Promise<boolean> {
    const result = await this.productsRepository.delete(id);
    return result.affected > 0;
  }

  async fetchProducts(): Promise<Product[]> {
    return this.productsRepository.find();
  }
}
