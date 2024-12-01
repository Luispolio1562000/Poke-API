import { IsNumber, IsOptional, IsPositive, MinLength } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  limit?: number;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  offset?: number;

}
