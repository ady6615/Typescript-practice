//its likr interface which makes a blueprint for classes
//BUT you cannot create objects using abstract
//In order to create objects you need to inherit the abstract class in other class

abstract class TakePhoto{
    constructor(public camera:string){}
}

// const ad = new TakePhoto         gives an error
class Instagram implements TakePhoto{
    constructor(public camera:string)
    {
    //  super(camera )
    }
}

 const ad = new Instagram("")  //now you can make object 
