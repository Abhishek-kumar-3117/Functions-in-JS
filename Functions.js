function hello() {
    console.log("Hello Abhishek");
}

hello();

function printName() {
    console.log("Abhishek kumar");
    console.log("Abhishek Rajput");
}

printName();

function print1to5() {
    for(let i=1; i<=5; i++) {
        console.log(i);
    }
}

print1to5();

function isAdult() {
    // let age = prompt("enter your age");
    let age = 18;
    if(age >= 18) {
        console.log("Adult");
    } else {
        console.log("Not Adult");
    }
}

isAdult();

// PQ

function printPoem() {
    console.log("If we cannot laugh at ourselves,life will become a dull and stifling experience. Life can be a challenge; of that there is no doubt. But if we take a moment to stop and see the joke, we can change our entire day. To those that take life seriously, we may see humor as an obstacle in our paths. The truth is that jokes are funny because they contain a grain of truth about life that would not be able to be shown through any other medium. A funny joke or poem has the power to point out subtle ironies of life that I might get shot in the head for if I were to say them straight out. Humor has the capacity to point absurdities about the way we live our lives in a non-threatening way.");
}

printPoem();

// PQ 
function rollDice() {
let rand = Math.floor(Math.random() * 6) + 1;
console.log(rand);
}

rollDice();


// Arguments

function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}

printInfo("abhishek", 21);
printInfo("aman", 24);
printInfo("ayush", 26);

function sum(a, b) {
    console.log(a+b);
}

sum(1, 2);
sum(7, 9);

// PQ 

function calcAvg(a, b, c){
    let avg = (a+b+c)/3;
    console.log(avg);
}

calcAvg(2, 6, 4);
calcAvg(4, 9, 5);

// PQ 

function table(n){
    for (let i=n; i<=n*10; i+=n){
    console.log(i);
    }
}

table(5);