export class SignInResponse {
  constructor(public id: number, public username: string, public roles: string[], public token: string) {
  }
}
