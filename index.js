// Iteration 1: Names and Input
console.log("I'm ready!");
var hacker1;
hacker1 = "Sofia"
console.log(`The driver's name is ${hacker1}`);
var hacker2;
hacker2 = "Fran"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`);

  } else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2} characters.`);

  } else {
  console.log(`Wow, you both have equally long names, ${hacker2} characters!.`);  
}


// Iteration 3: Loops
let nameExtended = "";
for(let i = 0; i < hacker1.length; i++){
  nameExtended = nameExtended + hacker1[i].toUpperCase() + " ";
  }
console.log(nameExtended);


let reverse = "";
for(let i = hacker2.length - 1; i != -1; i = i - 1){
  reverse =  reverse + hacker2[i]; 
}
console.log(reverse);


let compare = hacker1.localeCompare(hacker2);
if(compare == 1){
 console.log("The driver's name goes first."); 
  }
  if(compare == -1) {
  console.log("Yo, the navigator goes first definitely.");
  }
  if(compare == 0) {
  console.log("What?! You both have the same name?");
}
