let fruits = ['apple', 'bananas' , 'papayas', 'guava', 'pine Apple'];

function  eat(fruit){
    console.log("Eat ", fruit);
}

console.log(fruits);

for(let fruit of fruits){
    console.log(fruit);
}

//fruits.forEach(eat)

fruits.forEach(function(item){
    console.log(item)
})