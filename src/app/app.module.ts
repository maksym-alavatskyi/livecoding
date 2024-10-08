import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { ProductsModule } from '../products/products.module';
import { OrdersModule } from '../orders/orders.module';
import { User } from '../users/user.entity';
import { Product } from '../products/product.entity';
// import { AddressesModule } from './address/addresses.module';
import { Order } from '../orders/order.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { Address } from './address/address.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'ecommerce.db',
      entities: [User, Product, Order, /*Address*/],
      synchronize: true,
    }),
    UsersModule,
    ProductsModule,
    OrdersModule,
  //  AddressesModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
