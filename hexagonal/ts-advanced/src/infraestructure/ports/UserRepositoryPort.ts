import { User } from "../../domain/models/User";

export interface UserRepositoryPort {
    saveUser(user: User): void;
    getUserById(id: number): User | null
    getAllUsers(): Array<User>
}