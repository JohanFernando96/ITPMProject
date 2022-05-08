import react, {  useState } from 'react';
import { FormGroup, FormControl, Input, InputLabel, Button, Typography, makeStyles } from '@material-ui/core';
import { addVolunteer } from '../../services/volunteer.api.js';
import { useHistory } from 'react-router-dom';
import "../../css/volunteer.css";
import { validation } from './volunteerValidation.js';


//takes the values from the db object
const initialValue = {
    First_name: "",
    Last_name: "",
    Education: "",
    Area_of_expertise: "",
    Email: "",
    Address: "",
    Phone: ""
}


const useStyles = makeStyles({
  container: {
    width: '50%',
    margin: '5% 0 0 25%',
    '& > *': {
        marginTop: 15
    }
  }
})

const VolunteerRegistration = () => {
    const [ volunteer, setVolunteer ] = useState(initialValue);
    const { First_name, Last_name, Education, Area_of_expertise, Email, Address, Phone } = volunteer;
    const classes = useStyles();
    let history = useHistory();


    const onValueChange = (e) => {
        console.log(e.target.value);
        setVolunteer({...volunteer, [e.target.name]: e.target.value })
    }
    
    const addVolunteerDetails = async() => {
        await addVolunteer(volunteer);
        history.push('/Volunteer');
    }

    const errors = {
        First_nameError: "",
        Last_nameError: "",
        AddressError: "",
        Area_of_expertiseError: "",
        EmailError: "",
        EducationError: "",
        PhoneError: ""
    }

    //Volunteer Form Validation
    const validateFirst_name = () => {
        if(!First_name){
            console.log("First name field is empty!");
        }
    };

    const validateLast_name = () => {
        if(!Last_name){
            console.log("Last name field is empty!");
        }
    };

    const validateEducation = () => {
        if(!Education){
            console.log("Education field is empty!");
        }
    };

    const validateArea_of_expertise = () => {
        if(!Area_of_expertise){
            console.log("Area of expertise field is empty!");
        }
    };

    const validateAddress = () => {
        if(!Address){
            console.log("Address field is empty!");
        }
    };

    const validateEmail = () => {
        if(!Email){
            console.log("Email field is empty!");
        }
    };

    const validatePhone = () => {
        if(!Phone){
            console.log("Phone field is empty!");
        }
    };

    const validateVolunteerForm = () => {
        if(!First_name){
            errors.First_nameError = "First name field cannot be empty";
            console.log("First name field cannot be empty");
            return false;
        }

        if(!Last_name){
            errors.Last_nameError = "Last name field cannot be empty";
            console.log("Last name field cannot be empty");
            return false;
        }

        if(!Education){
            errors.EducationError = "Education field cannot be empty";
            console.log("Education field cannot be empty");
            return false;
        }

        if(!Area_of_expertise){
            errors.Area_of_expertiseError = "Area of expertise field cannot be empty";
            console.log("Area of expertise field cannot be empty");
            return false;
        }

        if(!Email){
            errors.EmailError = "Email field cannot be empty";
            console.log("Email field cannot be empty");
            return false;
        }

        if(!Address){
            errors.AddressError = "Address field cannot be empty";
            console.log("Address field cannot be empty");
            return false;
        }

        if(!Phone){
            errors.PhoneError = "Phone number field cannot be empty";
            console.log("Phone number field cannot be empty");
            return false;
        }

        return errors;
    };

    const sendVolunteerData = () => {
        const validateResult = validateVolunteerForm();
        if(validateResult == false){
            alert("Form is incomplete!!!");
        } 
        else{
            addVolunteerDetails();
        }
    }

    
    return (
         <FormGroup className={classes.container}>
             <Typography variant="h4">Volunteer Registration</Typography>
             <FormControl>
                 <InputLabel>First Name</InputLabel>
                 <Input 
                  onChange={(e) => onValueChange(e)} 
                  name='First_name' 
                  id='first_name' 
                  type='text' 
                  value={First_name}
                  placeholder={errors.First_nameError}
                  required/>
             </FormControl>
             <FormControl>
                 <InputLabel>Last Name</InputLabel>
                 <Input 
                  onChange={(e) => onValueChange(e)} 
                  name='Last_name' 
                  id='last_name' 
                  type='text' 
                  value={Last_name}
                  placeholder={errors.Last_nameError}
                  required/>
             </FormControl>
             <FormControl>
                 <InputLabel>Education</InputLabel>
                 <Input 
                  onChange={(e) => onValueChange(e)} 
                  name='Education' 
                  id='education' 
                  type='text'
                  value={Education}
                  placeholder={errors.EducationError}
                  required/>
             </FormControl>
             <FormControl>
                 <InputLabel>Area of Expertise</InputLabel>
                 <Input 
                   onChange={(e) => onValueChange(e)} 
                   name='Area_of_expertise' 
                   id='area_of_expertise' 
                   type='text' 
                   value={Area_of_expertise}
                   placeholder={errors.Area_of_expertiseError}
                   required/>
             </FormControl>
             <FormControl>
                 <InputLabel>Email</InputLabel>
                 <Input 
                   onChange={(e) => onValueChange(e)} 
                   name='Email' 
                   id='email' 
                   type='email' 
                   value={Email}
                   placeholder={errors.EmailError}
                   required/>
             </FormControl>
             <FormControl>
                 <InputLabel>Address</InputLabel>
                 <Input 
                  onChange={(e) => onValueChange(e)} 
                  name='Address' 
                  id='address' 
                  type='text' 
                  value={Address}
                  placeholder={errors.AddressError}
                  required/>
             </FormControl>
             <FormControl>
                 <InputLabel>Phone</InputLabel>
                 <Input 
                  onChange={(e) => onValueChange(e)} 
                  name='Phone' 
                  id='phone' 
                  type='text' 
                  value={Phone}
                  placeholder={errors.PhoneError}
                  required/>
             </FormControl>
             <FormGroup>
             <Button 
                  variant="contained" 
                  color="primary" 
                  value="Submit" 
                  onClick={() => sendVolunteerData()} 
                  style={{ marginBottom: 200 }}> 
                  add volunteer 
             </Button>
         </FormGroup>
         </FormGroup>
    )
}
export default VolunteerRegistration;