console.log("js runing")

let username = prompt("Enter your Name")
let gender = prompt("Enter Your Gender  : Male / Female")
let userAge = prompt("Enter your Age")

if (userAge <= 0) {
    alert("You enterd unvalid Age")
}
let userCity = prompt("Are you In Amman?(Yes/No)")

let userSoprtLover = prompt("Do you love sport?(Yes/No)")

let userSkill = prompt("Are you a programmer?(Yes/No)")
let answers = [];

function inputCheck(input) {
    // debugger
    if(input != ""){
        if (input == "Yes") {
            answers.push(input)
            return;
        }
        if (input == "No") {
            answers.push(input)
            return;
        } 
    }
    // if (input == "Yes" && input != "") {
    //     answers.push(input)
    //     return;
    // }
    // if (input != "" && input == "No") {
    //     answers.push(input)
    //     return;
    // }
     else {
        answers.push("invalid")
        return;
    }
}

inputCheck(userCity)
inputCheck(userSoprtLover)
inputCheck(userSkill)
answers.push(username)
answers.push(userAge)
answers.push(gender)

confirm("Do you want to see the welcome Message?")

if (true && gender == "Male" || gender == "male") {
    alert(`Welcom Mr ${username}`)
} else if (true && gender == "Female" || gender == "female") {
    alert(`Welcom Ms ${username}`)
} else if (true && gender == "Female" || gender == "female" || gender == "Male" || gender == "male") {
    alert(`Welcome ${username}`)
}



console.log(answers);
