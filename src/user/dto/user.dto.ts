import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class UserDtoParams {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;
}
