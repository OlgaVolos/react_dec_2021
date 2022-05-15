// interface IUser {
//     name:string;
//     age:number;
//     gender:string
// }
//
// const user:IUser = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }
//
// function sum(a:number,b:number):number{
//     return a+b
// }
// const showSum = (a:number, b:number): void => {
//     console.log(a + b);
// };
//
// const incAge = (someUser:IUser, inc:number): IUser => {
//     someUser.age+=inc
//     return someUser
// };
//
// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)

////////////////////////////////////////////////////////////////////////////
type Name = 'Max' |'Kira'|'Olya'
interface IUser{
    id?:number;
    name: Name;
}

interface IUser2 extends IUser{
    age: number
}


const user: Required<IUser> = {
    name: 'Olya',
    id: 25
}

const user2: Required<IUser2> = {
    id:4,
    name: "Max",
    age: 65
}

/////////////////////////////////////////////////

class User{
    constructor(private name:string, public age:number) {
    }
    getName():string{
        return this.name
    }
}
interface functional{
    getAge:() => number
}
class User2 extends User implements functional{
    constructor(name: string, age: number) {
        super(name, age);
    }
    getAge():number {
        return this.age
    }
}

//Required<IUser> означає, що поля мають бути обов"язковими, навіть, якщо в інтерфейсі написано, що ні
//type Name = 'Max' |'Kira'|'Olya' означає, що можна вводити лише ці дані
//extends завжди одне, implements може бути багато
