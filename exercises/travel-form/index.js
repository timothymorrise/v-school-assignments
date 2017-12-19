
var form = document.getElementById("form");
var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");
var age = document.getElementById("age");
var gender = document.getElementsByName("gender");
var destination = document.getElementById("destination");
var diet = document.getElementsByClassName("diet");
var output = {};

//HELPER FUNCTIONS
var getGender = function () {
    var output = ""
    for (var i = 0; i < gender.length; i++) {
        if(gender[i].checked) {
            output += gender[i].value;
        }
    }
    return output
}
   
var getDiet = function () {
    var dietOutputs = [];
    for (var i = 0; i < diet.length; i++) {
        if (diet[i].checked) {
            dietOutputs.push(diet[i].value);
        }
    }
    return dietOutputs
}

//Text for Alert
var txtAlert = function () {
    return "Name: " + firstName.value + " " + lastName.value + 
        "\nAge: " + Number(age.value) + 
        "\nGender: " + getGender() +
        "\nDestination: " + destination.value+ "\n" +
        "Diet Choices: " + getDiet();
}


var submit = function () {
    output.firstName = firstName.value;
    output.lastName = lastName.value;
    output.age = Number(age.value);
    output.gender = getGender();
    output.destination = destination.value
    output.diet = getDiet();
    alert(txtAlert());
}

form.onsubmit = function() {
    if (firstName.value && lastName.value && age.value && getGender()) {
        submit();
    } else {
        alert("INCOMPLETE FORM \nPlease fill out required fields.")
    }
}

//future addition would be to add a list of incomplete forms with the incomplete field