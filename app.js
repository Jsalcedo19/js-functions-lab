// Lab exercise: 1 maxOfTwoNumbers()
//step 1: create a function named maxOfTwoNumbers.
//step 2: take two numbers as inputs and return the large number.
//step 3: if they are equal, return either one.

const maxOfTwoNumbers = (x, y) => {
    if (x >= y){
        return x;
    }else{
        return y;
    }

}
console.log("Exercise 1 Results:", maxOfTwoNumbers(3, 9));

