import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';
import { UserDto, UserDtoParams } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getAllUser();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  addUser(@Body() user: UserDto): User[] {
    return this.userService.addUser(user);
  }

  @Delete(':email')
  deleteUser(@Param() param: UserDtoParams): User[] {
    return this.userService.deleteUser(param.email);
  }
}
