import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto";

@Controller("todos")
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }

  @Get(":id")
  getTodoById(@Param("id", ParseIntPipe) todoId: number) {
    return this.todoService.getTodosById(todoId);
  }

  @Post()
  createTodo(@Body() dto: CreateTodoDto) {
    return this.todoService.createTodo(dto);
  }

  @Patch(":id")
  editTodo(@Param("id", ParseIntPipe) id: number, @Body() dto: CreateTodoDto) {
    return this.todoService.editTodo(id, dto);
  }

  @Delete(":id")
  deleteTodo(@Param("id", ParseIntPipe) id: number) {
    return this.todoService.deleteTodo(id);
  }
}
