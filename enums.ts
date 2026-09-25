//enum will help to index the values in it 

enum seat2 {
    front,
    middle,
    back
}
//now front is =1 , middle = 2 , back = 3 by default

console.log(seat2.front)

// we can also change the indexing by changing first number

enum seat3 {
    front = 7,
    middle,
    back=24,
    up
}

console.log(seat3.front)
console.log(seat3.middle)
console.log(seat3.back)
console.log(seat3.up)

// you can also add strings
enum Fruit2 {
    apple = "a",
    banana=63,
    orange= "oran"
}
export{}