import { Role } from "./Role";
import { Direction } from "./Direction";

export class User {
    username: string;
    firstNameUser: string;
    lastNameUser: string;
    password: string;
    emailUser: string;
    direction: Direction;

    constructor(username: string, firstNameUser: string, lastNameUser: string, password: string, emailUser: string, direction: Direction) {

        this.username = username;
        this.firstNameUser = firstNameUser
        this.lastNameUser = lastNameUser;
        this.password = password;
        this.emailUser = emailUser;
        this.direction = direction;
    }

}