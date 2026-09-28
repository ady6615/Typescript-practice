class UserGS{
    private _num1:number = 9

    //Getter = Invokes when reading _num1
    get GetNum1():number{
            return this._num1
    }

    //Setter = invoked while writing od _num1
    set SetNum1(value:number){
        if(value<0 || value >30){
            throw new Error("value should be less than 30")
        }
    }

}

const Adv = new UserGS()
Adv.GetNum1
Adv.SetNum1 = 40

export{}
