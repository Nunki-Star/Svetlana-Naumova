var yourName = prompt("Please enter you name")
var fathersName = prompt("Please enter your fathers name")
var lastName = prompt("Please enter your last name")
var yourAge = prompt("Please enter your age(ex. years old)")
var maleGender = confirm("For male gender kindly click on 'confirm' btn")
var infoName = lastName + ' ' + yourName + ' ' + fathersName
var numberYears = Number(yourAge)
var ageDays = numberYears * 365
var infiveYears = numberYears + 5

var retired = (maleGender == true) ? true :
    (yourAge >= 63) ? "retired" : "not retired"

var retired = (maleGender == false) ? maleGender :
    (yourAge >= 58) ? "retired" : "not retired"

alert("Your name is : " + infoName + '\n' +
      "Your age is : " + yourAge + '\n' +
      "Your age is equal " + ageDays + " days" + '\n' +
      "In five years youll be " + infiveYears + '\n' +
      "Your gender is " + maleGender + '\n' +
       retired)