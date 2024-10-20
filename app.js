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


//Lab exercise 2: 

/*Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
function isAdult(age){
if (age >= 18){
    return "Adult";
}else{
    return "Minor";
}

}
console.log('Exercise 2 Result:', isAdult(17));

/*
Exercise 3: isCharAVowel()

step 1: Write a function named isCharAVowel that takes a single character as 
an argument. 
step 2: It should return true if the character is a vowel and 
false otherwise. 
step 3: For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
function isCharAVowel(vowel){
    if (vowel === "a"){
        return true;
    }
    else if (vowel === "e"){
        return true;
    }
    else if (vowel === "i"){
        return true;
    }
    else if (vowel === "o"){
        return true;
    }
    else if (vowel === "u"){
        return true;
    }
    else {
        return false;
    }
}
console.log('Exercise 3 Results:',isCharAVowel("o"));

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name,domain){
    //this concatenates name and domain to generate an email address
    return `${name}@${domain}`;
}
console.log('Exercise 4 Resuslt:',generateEmail("joseSalcedo","gmail.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser(timeOfDay, name){
return `Good ${timeOfDay}, ${name}!`;
}
console.log('Exercise 5 Result:',greetUser("Afternoo", "Jose"));


