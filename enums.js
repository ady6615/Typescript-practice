//enum will help to index the values in it 
var seat2;
(function (seat2) {
    seat2[seat2["front"] = 0] = "front";
    seat2[seat2["middle"] = 1] = "middle";
    seat2[seat2["back"] = 2] = "back";
})(seat2 || (seat2 = {}));
//now front is =1 , middle = 2 , back = 3 by default
console.log(seat2.front);
// we can also change the indexing by changing first number
var seat3;
(function (seat3) {
    seat3[seat3["front"] = 7] = "front";
    seat3[seat3["middle"] = 8] = "middle";
    seat3[seat3["back"] = 24] = "back";
    seat3[seat3["up"] = 25] = "up";
})(seat3 || (seat3 = {}));
console.log(seat3.front);
console.log(seat3.middle);
console.log(seat3.back);
console.log(seat3.up);
// you can also add strings
var Fruit2;
(function (Fruit2) {
    Fruit2["apple"] = "a";
    Fruit2[Fruit2["banana"] = 63] = "banana";
    Fruit2["orange"] = "oran";
})(Fruit2 || (Fruit2 = {}));
export {};
