//for array function

function GetSearchedProducts <T>(products : T[]){
    const myIndex = 3
    return products[myIndex]
}

//for arrow function


const GetSearchedProducts2 = <T>(products : T[]):
    T => {const myIndex = 3
    return products[myIndex]
    }

