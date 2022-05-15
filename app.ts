// // const show = (a:number, b:number):number => {
// //     return a+b
// // } // return number
//
// // нічого не повертає void
// // number|string - повертає або число, або стрінгу
// // такожми можемо вказати, що саме хочемо повертати
//
// //обов"язково треба перекомпіювати. В терміналі пишемо
// // tsc назва файлу.ts. Робити кожного разу перед запуском.
// // запуск робимо node назва файлу.js
//
// // console.log(show(1, 2));
// //
// //
// //
// // type UniqID = number //свій власний тип
// //
// // interface IUser<T>{
// //     id:UniqID,
// //     name: string,
// //     age:number,
// //     address: IAddress,
// //     arr?: T[]
// // };
// //
// // interface IAddress{
// //     street: string,
// //     house: number
// // }
// // let user:IUser<number> = {
// //     id: 1,
// //     name: "Max",
// //     age: 15,
// //     address:{
// //         street: "Lvivska",
// //         house: 11},
// //     arr: [1,2]
// // };
// //
// // type StateType = [string, (a:number, b:number)=>number];
// //
// // const useState:StateType = ['text', (a,b)=> {
// //     return a+b
// // }]
// //
// // let [first, second] = useState;
// // console.log(first);
// // console.log(second(1, 8));
//
// // Partial<IUser> частове використання інтерфейсу
// // <T> "T" буде типом, оголошеним під час виконання, а не під час компіляції.
// // Змінною T може бути будь-яка неоголошена змінна,
// // яку потім оголошуємо IUser<number>
//
// //**********************************************************************//
//
// // class User{
// //     private id?: number;
// //    public name: string;
// //     age: number
// //
// //     constructor(id: number, name: string, age: number) {
// //         this.id = id;
// //         this.name = name;
// //         this.age = age;
// //     }
// //     getId():number{
// //         return this.id
// //     }
// // };
//
// // class User{
// //     constructor(private id?: number, protected name: string, private age: number) {
// //         this.id = id;
// //         this.name = name;
// //         this.age = age;
// //     }
// // }
//
// // const user1:User = {
// //     name: "Olya",
// //     age: 35,
// // };
//
// // user1.getId()
//
//
// // const user2 = new User(13, 'Max', 20);
//
// //privat  - немає доступу, public - по замовчуванню, можна не писати
// // якщо поле приватне, до нього можна отримати доступ за допомогою методів всередині конструктора
// // або нащадка
//
// //*****************************************************************************************************
//
//
// interface IShapeActions {
//     area: () => number;
//     perimetr: () => number;
// };
//
// class Triangle implements IShapeActions{
//     constructor(private a:number, private b:number, private c:number, ) {
//     }
//     area(): number {
//         return this.a*this.b*this.c
//     }
//
//     perimetr(): number {
//         return this.a+this.b+this.c
//     }
//
// }
//
// class Rectangle implements IShapeActions{
//     constructor(private a:number, private b:number) {
//     }
//     area(): number {
//         return this.a*this.b;
//     }
//
//     perimetr(): number {
//         return (this.a*this.b)*2;
//     }
//
// }
//
// const shapes:IShapeActions[] = [new Triangle(1,2,3), new Rectangle(5,4)]
//
// for (const shape of shapes) {
//     console.log(shape.area());
//     console.log(shape.perimetr());
//
// }
//
// // процес компілювання можна автоматизувати. Для цього видалаємо сві
// // js файл, створюємо в корені проект файл tsconfig.json
// // туди кладемо конфігурацію і змінюємо скріпт стартy






