import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { TodoListService } from "./todo-list.service";

@Controller("todo-list")
export class TodoListController {
  constructor(private todoListService: TodoListService) {}

  @Get()
  getList() {
    return this.todoListService.get();
  }

  @Post("/add")
  async addItem(@Body() body: any) {
    const item = await this.todoListService.add(body.name);
    return item;
  }

  @Delete("delete/:id")
  delete(@Param("id") id: number) {
    return this.todoListService.remove(id);
  }
}
