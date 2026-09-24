//
//using a union

let score:number | string = 33

score = 44
score = "s"
// now both types are possible

type User={
    name : string;
    id: number;
}
type Admin={
    username:string;
    id2:number
}
//such custom data type objects can also be used for union

let advait1:User|Admin = {name :"advait" , id:42 , username:"dawd"}

// function getDbId(id:number |string){
//     console.log('Db id is ${id}');

// }
getDbId(3)
getDbId("3")

function getDbId(id:number |string){
  //  id.toUppercase()
// now it is both number and string so toUppercase dosent work
 //to make it waork
 if (typeof id=== "string"){
    id.toUpperCase()
    //now it knows it will be a string so it works
 }
}


//array

const data :number[] = [1,2,3,4]
const data2 :string[] = ["1","2",'3','4']
const data3 :(string|number|boolean)[] = [1,3,4,5,"1","2",'3','4']


