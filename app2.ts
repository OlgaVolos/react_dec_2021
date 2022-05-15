import {userService} from "./services";
import {MyEnums} from "./enums";

const getAllUsers = async () => {
    let {data:users} = await userService.getAll();
    for (const user of users) {
        console.log(user.name);
    }
}
getAllUsers()

console.log(MyEnums.ADD);
