import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { GetUser } from "./decorator";
import { AuthDto } from "./dto";
import { JwtGuard, RTGuard } from "./guard";

@Controller("auth")
@ApiTags('auth')

export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signup")
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("signin")
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }

  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.OK)
  @Post("logout")
  logout(@GetUser("id") userId: number) {
    return this.authService.logout(userId);
  }

  @UseGuards(RTGuard)
  @HttpCode(HttpStatus.OK)
  @Post("refresh")
  refresh(@GetUser() user: any) {
    return this.authService.refreshTokens(user.sub, user.refreshToken);
  }
}
