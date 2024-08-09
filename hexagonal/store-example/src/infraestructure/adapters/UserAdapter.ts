import { User } from "../../domain/models/User";
import { UserRepositoryPort } from "../ports/UserRepositoryPort";


export class UserAdapter implements UserRepositoryPort {
    private users: User[] = [];


    saveUser(user: User): void {
        this.users.push(user)
    }
    getUserById(id: number): User | null {
        return this.users.find(user => user.id === +id) || null
    }
    getAllUsers(): Array<User>{
        return this.users
    }
    
}