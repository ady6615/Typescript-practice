function addTwo(num: number){
    return num +2
}

function getUpper(val : string){
    return val.toUpperCase()
}

function signUpUser(name : string , email : string , ispaid: boolean ){}

let LoginUser = (name : string , email : string , ispaid: boolean = false) => {}

addTwo(5)
getUpper("advait")

signUpUser("ady", "advaitpatil@gmail.com", true)
LoginUser("a", "a.gmail.com")

//return annotations

function ReturnNumber() : number {
    return 1
}


export{}