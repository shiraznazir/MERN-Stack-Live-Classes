function square(num){
    return num * num;
}
//console.log(square(10));

function say_hello(){
    console.log("hello");
    return;
}

// let value = say_hello();
// console.log(value);

// let another = say_hello();
// console.log(another);

let temp = say_hello;
say_hello = square;
square = temp;

square();
//console.log(say_hello(10));