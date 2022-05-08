function VolunteerValidation(){
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var education = document.getElementById("education").value;
    var area_of_expertise = document.getElementById("area_of_expertise").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value; 

    if (first_name.length < 5){
        alert("Please enter a valid name!");
        return false;
    }

    if (last_name.length < 5){
        alert("Please enter a valid name!");
    }

    if(address.length > 3 && address.length < 20){
        alert("Please enter a valid address!");
    }

    if(education.length < 6){
        alert("Please enter a valid education!");
    }

    if(area_of_expertise < 5){
        alert("Please enter the Area of Expertise!");
        return false;
    }

    if(email.indexOf("@") === -1 || email.length < 5){
        alert("Please enter  valid Email address!");
        return false;
    }

    if(isNaN(phone) || phone.length !== 10){
        alert("Please enter  valid phone number");
        return false;
    }

    alert("Volunteer Registration form is submitted Successfully!!!");
    return false;
}

export default VolunteerValidation;

