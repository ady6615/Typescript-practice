// defining array 2 ways

const array1 : number[] = []
//or
const array2 : Array<string> = []

array1.push(3)

//you can also make arrays of custom types

type User = {name:string , email: string}

const array3:User[]=[]
//here you can push data type like user

let advait = {name:"a" , email:"d"}

array3.push(advait)

console.log(array3)

export{}