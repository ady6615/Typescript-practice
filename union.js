//
//using a union
let score = 33;
score = 44;
score = "s";
//such custom data type objects can also be used for union
let advait1 = { name: "advait", id: 42, username: "dawd" };
// function getDbId(id:number |string){
//     console.log('Db id is ${id}');
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    //  id.toUppercase()
    // now it is both number and string so toUppercase dosent work
    //to make it waork
    if (typeof id === "string") {
        id.toUpperCase();
        //now it knows it will be a string so it works
    }
}
//array
const data11 = [1, 2, 3, 4];
const data12 = ["1", "2", '3', '4'];
const data13 = [1, 3, 4, 5, "1", "2", '3', '4'];
export {};
