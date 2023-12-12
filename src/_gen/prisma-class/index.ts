import { UserRelations as _UserRelations } from './user_relations';
import { DepartmentRelations as _DepartmentRelations } from './department_relations';
import { CategoryRelations as _CategoryRelations } from './category_relations';
import { ProductRelations as _ProductRelations } from './product_relations';
import { ProductImageRelations as _ProductImageRelations } from './product_image_relations';
import { ProductSizeRelations as _ProductSizeRelations } from './product_size_relations';
import { User as _User } from './user';
import { Department as _Department } from './department';
import { Category as _Category } from './category';
import { Product as _Product } from './product';
import { ProductImage as _ProductImage } from './product_image';
import { ProductSize as _ProductSize } from './product_size';

export namespace PrismaModel {
  export class UserRelations extends _UserRelations {}
  export class DepartmentRelations extends _DepartmentRelations {}
  export class CategoryRelations extends _CategoryRelations {}
  export class ProductRelations extends _ProductRelations {}
  export class ProductImageRelations extends _ProductImageRelations {}
  export class ProductSizeRelations extends _ProductSizeRelations {}
  export class User extends _User {}
  export class Department extends _Department {}
  export class Category extends _Category {}
  export class Product extends _Product {}
  export class ProductImage extends _ProductImage {}
  export class ProductSize extends _ProductSize {}

  export const extraModels = [
    UserRelations,
    DepartmentRelations,
    CategoryRelations,
    ProductRelations,
    ProductImageRelations,
    ProductSizeRelations,
    User,
    Department,
    Category,
    Product,
    ProductImage,
    ProductSize,
  ];
}
