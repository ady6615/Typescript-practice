type User={
    name : string;
    
    readonly Id :string; //you can only read the value not change it
    credictcard?:number; //not compulsory to pass in the new object
}

function CreateUser2(u:User){}

let advait :User ={name:"a", Id:"342", credictcard:32442}

console.log(advait.Id)
// advait.Id = 43634;   
// not allowed
console.log(advait.Id)





