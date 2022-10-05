import { AuthGuard } from "@nestjs/passport";

export class JwtGuard extends AuthGuard("jwt") {
  constructor() {
    super();
  }
}

export class RTGuard extends AuthGuard("jwt-refresh") {
  constructor() {
    super();
  }
}
