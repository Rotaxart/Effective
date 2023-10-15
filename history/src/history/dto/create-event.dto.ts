import { IsInt, IsString } from 'class-validator';

export class CreateEventDto {
  @IsInt()
  user_id: number;
  @IsString()
  event: string;
}
