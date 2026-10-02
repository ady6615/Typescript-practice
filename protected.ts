class UserPro{
    private _num1= 1
    protected _num2 = 3
}

class SubUser extends UserPro{
    ChangeCourse(){
    // this._num1 =30     this gives error as the variable is private
    this._num2 =30    // this works because variable is protected
    }
}