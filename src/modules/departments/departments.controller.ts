import { Body, Controller, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Department } from 'src/_gen/prisma-class/department';
import { AdminGuard, IdDto, PaginationAndFilterDto } from 'src/common';

import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dtos';

@Controller('departments')
@UseGuards(AdminGuard)
@ApiTags('Departments')
@ApiBearerAuth()
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
  @ApiCreatedResponse({ type: Department })
  async create(@Body() dto: CreateDepartmentDto) {
    return this.departmentsService.create(dto);
  }

  @Get()
  @ApiOkResponse({ type: [Department] })
  find(@Query() query: PaginationAndFilterDto) {
    return this.departmentsService.find(query);
  }

  @Get(':id')
  @ApiOkResponse({ type: Department })
  findOne(@Param() { id }: IdDto) {
    return this.departmentsService.findOne(id);
  }
}
