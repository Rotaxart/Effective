import { IsNumberString, IsOptional, IsPositive, Min } from 'class-validator';

export class EventFiltersDto {
  @IsOptional()
  @IsNumberString()
  user_id?: string | number;

  @IsOptional()
  @IsNumberString()
  page?: number;

  @IsOptional()
  @IsNumberString()
  show_by?: string | number;
}
