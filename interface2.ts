
//defines a structure for the classes below
interface newInt{
    num:number
    name:string
    id:number
}


class User6 implements newInt{
    num:number= 3           //-----
    name:string = ""        //------->these 3 variable are compulsory or it will give an error
    id:number = 9           //-----
    id2:number = 0//new added
}

interface Newfunction {
    call(): void
}

class User7 implements newInt,Newfunction{
    num:number= 3           //-----
    name:string = ""        //------->these 3 variable are compulsory or it will give an error
    id:number = 9           //-----
    id2:number = 0//new added

    call(){
        console.log("hi")
    }
}

class User8 implements newInt,Newfunction{
    num:number= 3           //-----
    name:string = ""        //------->these 3 variable are compulsory or it will give an error
    id:number = 9           //-----
    id2:number = 0//new added

    call(){
        console.log("hello")
    }
}