//define a structure that an object is expected to have

interface User {
    readonly dbId : number
    email : string
    userID : number
    googleId? : string
    RunTrial(): string
    GetCupon(cuponname: string , value:number): number
}

const advait : User={
    dbId : 34 , email : "niuf" , userID : 97 , RunTrial(){
        return ""} , 
        GetCupon(cuponname, value) {
            return 9
        },
    
}

export{}
