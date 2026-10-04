// Generics are a feature in programming that allow you to write reusable, 
// type-safe code by using placeholders for data types. Instead of writing 
// separate versions of the same function or class for integers, strings, or
//  custom objects, you write a single implementation with a placeholder 
// (usually denoted as <T>). The actual data type is specified later


//The identity function is a function that will return back whatever is passed in

function identity(arg: number): number {
  return arg;
}
//for all datatypes we can use any
function identity1(arg: any): any {
  return arg;
}

//instead of any we use 'Type' which changes its datatype to the value pass in that function


function identity2<Type>(arg: Type): Type {
  return arg;
}

//example 

identity2(45)

//now type converts to number

identity2('name')
//now convwerts to a string

//hence using same function for different data types
