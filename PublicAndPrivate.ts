// public and private in classes
// private only visible inside the class , public visible outside the class too

class UserPrivate{
    public email : string
    private name : string
    constructor(email : string , name : string){
        this.email = email
        this.name = name
    }
}

const Advait = new UserPrivate("ady.com" , "advait")

console.log(Advait.email)           //possible
// console.log(Advait.name)       not possible
 
//You can also make constructor like this , without using " This. "
class UserPrivate2{
    constructor(public name:string , private email :string){}

}