import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order } from './order.entity';
import { Product } from 'src/products/product.entity';
import { User } from 'src/users/user.entity';
import { UsersService } from 'src/users/users.service';
import { ProductsService } from 'src/products/products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, User, Product])],
  controllers: [OrdersController],
  providers: [OrdersService, UsersService, ProductsService],
})
export class OrdersModule {}
