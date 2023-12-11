export interface JwtPayloadInterface {
  userId: string;
  isAdmin: boolean;
  iat?: number;
}
