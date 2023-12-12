import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { type Department } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { getWhereQuerySearch, PaginationAndFilterDto } from 'src/common';

import { CreateDepartmentDto } from './dtos';

@Injectable()
export class DepartmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateDepartmentDto): Promise<Department> {
    const department = await this.prisma.department.findUnique({
      where: { name: dto.name },
    });

    if (department) {
      throw new ConflictException('Department already exists');
    }

    return this.prisma.department.create({ data: dto });
  }

  async find(dto: PaginationAndFilterDto): Promise<Department[]> {
    const where = getWhereQuerySearch<Department>(dto.querySearch, ['name']);

    return this.prisma.department.findMany({
      where,
    });
  }

  async findOne(id: string): Promise<Department> {
    const department = await this.prisma.department.findUnique({ where: { id } });

    if (!department) {
      throw new NotFoundException('Department not found');
    }

    return department;
  }
}
