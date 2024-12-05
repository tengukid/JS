

/*function multiply(x, y) {
    const answer = x * y;
    return answer
}
console.log(multiply(100, 10));*/



/*function divide(x, y) {
    const answer = x / y
    return answer

}*/

/*console.log(divide(100, 10));

function phrase() {
    console.log("How are you ?")
}

phrase()*/


/*const firstName = prompt("what is your name?")

const secondName = prompt("what is your secodn name?")

function fullName(first, last) {

    console.log(`${first} ${last}`)

}

fullName(firstName, secondName)*/


/*(const userNumber = prompt("Pick a number to be multiplied")
const userNumber1 = prompt("Pick another")

function multiply(a, b) {
    return a * b

}

const resultFromFunction = multiply(userNumber, userNumber1)
console.log(resultFromFunction);*/


/*const userNumber = prompt("Pick a number to be multiplied")
const userNumber1 = prompt("Pick another")

multiply = (a, b) => a * b;

const userTotal = multiply(userNumber, userNumber1);
console.log(userTotal);

const resultFromFunction = multiply(userNumber, userNumber1)
console.log(resultFromFunction)*/14

/*const age = prompt("what is your age ?")

if (
    age >= 18


)

    console.log("You are old!")


if (
    age < 18


)

    console.log("You are not old!");*/


/*const temp = prompt("what is the temperature ?");


function tempCheck(arg) {
    if (
        temp >= arg


    )

        console.log("You dont need a coat!");


    if (
        temp < arg


    )

        console.log("You  need a coat!");

}
*/

//const temp = prompt("what is the temperature ?");//

//function tempChk(arg) {//


/*function checkTemperature(temperature) {

    if (temperature < 0) {
        return "Stay inside";
    } else if (temperature < 30) {
        return "Wear a coat and a hat";
    } else if (temperature < 50) {
        return "Wear a coat";
    } else {
        return "Just pants and vest is fine";
    }
}
    


console.log(checkTemperature(30));*/

const temprature = prompt("Write Temprature in Celsius");
function temp(t) {
    if (temprature <= 50 && temprature > 30) {
        return "Wear a coat";
    } else if (temprature <= 30 && temprature > 0) {
        return "Wear a coat and a hat";
    } else if (temprature <= 0) {
        return "Stay Inside";
    } else {
        return "just pants and vest is fine";
    }
}

console.log(temp(temprature20));

