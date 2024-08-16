// and  or operator 



// if(firstName[0] === "B"){
//     console.log("your name starts with B")
// }

// if(age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "H" && age>18){
//     console.log("Name starts with B and above 18");
// }else{
//     console.log("inside else");
// }
let firstName = "eshoy";
let age = 16;

if (firstName[0] === "B" || age < 18) {
    console.log("inside if");
} else {
    console.log("inside else");
}