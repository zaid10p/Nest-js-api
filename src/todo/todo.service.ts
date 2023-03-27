import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateTodoDto } from "./dto";

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  getTodos() {
    return this.prisma.todos.findMany();
  }

  getTodosById(todoId: number) {
    return this.prisma.bookmark.findFirst({
      where: {
        id: todoId,
      },
    });
  }

  async createTodo(dto: CreateTodoDto) {
    const todo = await this.prisma.todos.create({
      data: {
        ...dto,
      },
    });

    return todo;
  }

  async editTodo(id: number, dto: CreateTodoDto) {
    // get the bookmark by id
    const todo = await this.prisma.todos.findUnique({
      where: {
        id,
      },
    });

    // check if todo exists
    if (!todo) throw new NotFoundException("Todo not Found!");

    return this.prisma.todos.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteTodo(id: number) {
    const todo = await this.prisma.todos.findUnique({
      where: {
        id,
      },
    });

    // check if todo exists
    if (!todo) throw new NotFoundException("Todo not Found!");

    await this.prisma.todos.delete({
      where: {
        id,
      },
    });
    return { deleted: true };
  }
}
