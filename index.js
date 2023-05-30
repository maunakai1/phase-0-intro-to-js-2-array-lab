// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return cats;
}
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveFirstCat(name){
    cats.shift();
    return cats;
}
function destructivelyRemoveLastCat(name){
    cats.pop();
    return cats;
}
function appendCat(name){
    var newArray = cats.slice();
    newArray.push(name);
    return newArray;
}
function prependCat(name){
    var newArray = cats.slice();
    newArray.unshift(name);
    return newArray;
}
function removeLastCat(){
    var newArray = cats.slice();
    newArray.pop();
    return newArray;
}
function removeFirstCat(){
    var newArray = cats.slice();
    newArray.shift();
    return newArray;
}