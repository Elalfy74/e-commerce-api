import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'nestjs-prisma';
import { getWhereQuerySearch, hashPassword } from 'src/common';

import { CreateUserDto, FindManyUsersDto } from './dtos';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto): Promise<User> {
    // Check if email already exists
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    // If user exists, throw an error
    if (user) {
      throw new ConflictException('Email already exists');
    }

    // The User May be a social user
    let hashedPassword: string | undefined;
    if (dto.password) {
      // Hash the password
      hashedPassword = await hashPassword(dto.password);
    }
    // If user doesn't exist, create a new user
    return this.prisma.user.create({
      data: {
        ...dto,
        password: hashedPassword,
      },
    });
  }

  async find(query: FindManyUsersDto): Promise<User[]> {
    let where: Prisma.UserWhereInput = {};

    if (query.querySearch) {
      where = getWhereQuerySearch<User>(query.querySearch, ['email', 'firstName', 'lastName']);
    }

    if (query.isAdmin !== undefined) {
      where.isAdmin = query.isAdmin;
    }

    return this.prisma.user.findMany({
      skip: query.page * query.itemsPerPage,
      take: query.itemsPerPage,
      where,
    });
  }

  findOne({ id }: { id: string }): Promise<User | null>;
  findOne({ email }: { email: string }): Promise<User | null>;
  async findOne(arg: any): Promise<User | null> {
    let where: Prisma.UserWhereUniqueInput;

    if ('id' in arg) {
      where = {
        id: arg.id,
      };
    } else {
      where = {
        email: arg.email,
      };
    }

    return this.prisma.user.findUnique({
      where,
    });
  }
}
