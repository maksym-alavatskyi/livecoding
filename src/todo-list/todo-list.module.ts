import { Module } from '@nestjs/common';
import { TodoListController } from './todo-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoItem } from './todo-item.entity';
import { TodoListService } from './todo-list.service';


@Module({
  imports: [TypeOrmModule.forFeature([TodoItem])],
  controllers: [TodoListController],
  providers: [TodoListService],
})
export class TodoListModule {}
