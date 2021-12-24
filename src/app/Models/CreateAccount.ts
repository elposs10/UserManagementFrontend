import { Role } from "./Role";
import { Direction } from "./Direction";

export class CreateAccount {
  username: string;
  firstNameUser: string;
  lastNameUser: string;
  password: string;
  emailUser: string;
  direction: Direction;
  role: Role;

  constructor(username: string, firstNameUser: string, lastNameUser: string,  password: string,
    emailUser: string, direction: Direction, role: Role) {

    this.username = username;
    this.firstNameUser = firstNameUser
    this.lastNameUser = lastNameUser;
    this.password = password;
    this.emailUser = emailUser;
    this.direction = direction;
    this.role = role;

  }
}