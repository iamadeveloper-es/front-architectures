import { User } from "../../domain/models/User";
import { UserAdapter } from "../adapters/UserAdapter";
import { UserRepositoryPort } from "../ports/UserRepositoryPort";


/**
 * En esta capa sería donde se conectaría con el API a través de xhr, fetch, axios, et
 */
export class UserService {
    userRepository: UserRepositoryPort;

    constructor(){
        this.userRepository = new UserAdapter()
    }

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