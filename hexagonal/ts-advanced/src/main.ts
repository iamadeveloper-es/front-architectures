import { UserService } from "./infraestructure/services/User.service"

const userService = new UserService()


const userModel1 = {
    id: 1,
    name: 'Daniel Verdú',
    email: 'danielverdu@gmail.com'
}

const userModel2 = {
    id: 7,
    name: 'Alfredo Martín',
    email: 'alfredomartin@gmail.com'
}

const userModel3 = {
    id: 9,
    name: 'Anuar Ahouari',
    email: 'anuarahouari@gmail.com'
}

userService.save(userModel1)
userService.save(userModel2)
userService.save(userModel3)
console.log(userService.getById(1))
console.log(userService.getAll())