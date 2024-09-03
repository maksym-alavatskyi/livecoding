import { Repository } from "typeorm";
import { TodoItem } from "./todo-item.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TodoListService {
  constructor(@InjectRepository(TodoItem) private repo: Repository<TodoItem>) {}

  async add(name: string) {
    const todoItem = this.repo.create({ name });
    return this.repo.save(todoItem);
  }

  async remove(id: number) {
    const todoItem = await this.repo.findOne({ where: { id } });
    if (!todoItem) {
      throw new NotFoundException(`Item not found`);
    }
    return this.repo.remove(todoItem);
  }

  async get() {
    return this.repo.find();
  }
}
