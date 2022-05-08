import react, {  useState, useEffect } from 'react';
import { FormGroup, FormControl, Input, InputLabel, Button, Typography, makeStyles } from '@material-ui/core';
import { editVolunteer, getVolunteer } from '../../services/volunteer.api.js';
import { useHistory, useParams } from 'react-router-dom';

//takes the values from the db object
const initialValue = {
    First_name: '',
    Last_name: '',
    Education: '',
    Area_of_expertise: '',
    Email: '',
    Address: '',
    Phone: ''
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


const EditVolunteer = () => {
    const [ volunteer, setVolunteer ] = useState(initialValue);
    const { First_name, Last_name, Education, Area_of_expertise, Email, Address, Phone } = volunteer;
    const { id } = useParams();
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        loadVolunteerDetails();
    }, []);

    const loadVolunteerDetails = async () => {
        const response = await getVolunteer(id);
        setVolunteer(response.data);
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setVolunteer({...volunteer, [e.target.name]: e.target.value})
    }
    
    const editVolunteerDetails = async() => {
        await editVolunteer(id, volunteer);
        history.push('/Volunteer');
    }

    return (
         <FormGroup className={classes.container}>
             <Typography variant="h4">Update Volunteer</Typography>
             <FormControl>
                 <InputLabel>First Name</InputLabel>
                 <Input 
                   onChange={(e) => onValueChange(e)}
                   name='First_name' 
                   id='first_name' 
                   type='text' 
                   value={First_name} 
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
                   required/>
             </FormControl>
             <FormControl>
                 <InputLabel>Phone Number</InputLabel>
                 <Input 
                   onChange={(e) => onValueChange(e)}
                   name='Phone' 
                   id='phone' 
                   type='text'
                   value={Phone} 
                   required/>
             </FormControl>
             <Button 
                   variant="contained" 
                   color="primary" 
                   onClick={() => editVolunteerDetails()}> 
                   edit volunteer 
             </Button>
         </FormGroup>
    )
}
export default EditVolunteer;