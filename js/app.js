console.log("js runing");

let username = prompt("Enter your Name");
let gender = prompt("Enter Your Gender  : Male / Female");
let userAge = prompt("Enter your Age");
if (userAge <= 0) {
  alert("You enterd unvalid Age");
}

confirm("Do you want to see the welcome Message?");
// debugger
if ((true && gender == "Male") || gender == "male") {
  alert(`Welcom Mr ${username}`);
} else if ((true && gender == "Female") || gender == "female") {
  alert(`Welcom Ms ${username}`);
} else if (
  (true && !gender == "Female") ||
  !gender == "female" ||
  !gender == "Male" ||
  !gender == "male"
) {
  alert(`Welcome ${username}`);
} else {
  alert(`Welcome ${username}`);
}
