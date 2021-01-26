/*
1) Write a function that accepts two numbers as parameters and returns the sum.

2) write a function that accepts three numbers as parameters and returns the largest of those numbers.
         Hint: you will need to use Math.max to find the largest of all numbers provided as input.
         
3)Write a function that accepts one number as a parameter and returns whether that number is even or odd. 
       (Return the string "even" or "odd");

4)Write a function that accepts a string as a parameter. 
If the length of the string is less than or equal to twenty characters long,
return the string concatenated with itself (string + string). If the string is more than twenty characters long,
return the first half of the string.*/

function add(a1, a2){
    return a1 + a2;
}g

    console.log (add (9, 3));


 function compare(alpha, omega, yahweh){
    return Math.max(alpha, omega, yahweh);
    }
console.log(compare(2, 4, 6));

function oddEven(delta){
    if(delta % 2 === 0){
        return (delta + " is even");
    } else {
        return (delta + " is odd");
    }
}

    console.log(oddEven(126));

function characterCount(charString){
    if(charString.length <= 20){
    return (charString + charString);
    } else {
        return charString.substring(0, charString.length / 2);
    }
}
console.log(characterCount("A Eggs car is a ?"));
console.log(characterCount("Yokes-waggon ! ! ! "));


