import { User } from "../core/models/User";
import { UserRepositoryPort } from "../core/ports/UserRepositoryPort";

export class UserService {
    constructor(private userRepository: UserRepositoryPort){}

    save(userData: User): void{
        const {id, name, email} = userData;
        const user = new User(id, name, email)
        this.userRepository.saveUser(user)
    }

    getById(id: number): User | null{
        return this.userRepository.getUserById(id)
    }

    getAll(): Array<User> {
        return this.userRepository.getAllUsers()
    }
}