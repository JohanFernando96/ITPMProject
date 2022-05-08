import React, {  useState } from 'react';
import { FormGroup, FormControl, Input, InputLabel, Button, Typography, makeStyles } from '@material-ui/core';
import { addInventory} from '../../services/inventories.api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    Organization: "",
	stretcher: "",
	lifejacket : "",
	firstaid: "",
	bucket: "",
	gloves:"",
	torchlight: "",
	safetyhelmet : "",
	readymadefood : "",
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


const AddInventory = () => {
    const [ inventory, setInventory ] = useState(initialValue);
    const { Organization,stretcher,lifejacket,firstaid,bucket,gloves,torchlight,safetyhelmet,
      readymadefood,others} = inventory;
    const classes = useStyles();
    let history = useHistory();


    const onValueChange = (e) => {
        console.log(e.target.value);
        setInventory({...inventory, [e.target.name]: e.target.value })
    }
    
    const addInventoryDetails = async() => {
        await addInventory(inventory);
        history.push('/Inventories');
    }

    const errors = {
        OrganizationError: "",
	stretcherError: "",
	lifejacketError : "",
	firstaidError: "",
	bucketError: "",
	glovesError:"",
	torchlightError: "",
	safetyhelmetError : "",
	readymadefoodError : "",
	othersError: "",
      };


    // form validation
   
  const validateOrganization = () => {
    if (!Organization) {
      console.log("Organization field is empty");
    }
  };
  const validatestretcher = () => {
    if (!stretcher) {
      console.log("stretcher field is empty");
    }
  };
  const validatelifejacket = () => {
    if (!lifejacket) {
      console.log("lifejacket field is empty");
    }
  };
  const validatefirstaid = () => {
    if (!firstaid) {
      console.log("firstaid field is empty");
    }
  };
  const validatebucket = () => {
    if (!bucket) {
      console.log("bucket field is empty");
    }
  };
  const validategloves = () => {
    if (!gloves) {
      console.log("gloves field is empty");
    }
  };
  const validatetorchlight = () => {
    if (!torchlight) {
      console.log("torchlight field is empty");
    }
  };
  const validatesafetyhelmet = () => {
    if (!safetyhelmet) {
      console.log("safetyhelmet field is empty");
    }
  };
  const validatereadymadefood = () => {
    if (!readymadefood) {
      console.log("readymadefood field is empty");
    }
  };
  const validateothers = () => {
    if (!others) {
      console.log("others field is empty");
    }
  };


  const validateInventoryForm = () => {
    if (!Organization) {
      errors.OrganizationError = "Organization field cannot be empty";
      console.log("Organization field cannot be empty");
      return false;
    }
    if (!stretcher) {
      errors.stretcherError = "stretcher field cannot be empty";
      console.log("stretcher field cannot be empty");
      return false;
    }
    if (!lifejacket) {
      errors.lifejacketError = "lifejacket field cannot be empty";
      console.log("lifejacket field cannot be empty");
      return false;
    }
    if (!firstaid) {
      errors.firstaidError = "firstaid field cannot be empty";
      console.log("firstaid field cannot be empty");
      return false;
    }
    if (!bucket) {
      errors.bucketError = "bucket field cannot be empty";
      console.log("bucket field cannot be empty");
      return false;
    }
    if (!gloves) {
        errors.glovesError = "gloves  field cannot be empty";
        console.log("gloves field cannot be empty");
        return false;
      }
    if (!torchlight) {
        errors.torchlightError = "torchlight field cannot be empty";
        console.log("torchlight field cannot be empty");
        return false;
      }
    if (!safetyhelmet) {
        errors.safetyhelmetError = "safetyhelmet field cannot be empty";
        console.log("safetyhelmet  field cannot be empty");
        return false;
      }
    if (!readymadefood) {
        errors.readymadefoodError = "readymadefood field cannot be empty";
        console.log("readymadefood field cannot be empty");
        return false;
      }
    if (!others) {
        errors.tipperError = "others field cannot be empty";
        console.log("others  field cannot be empty");
        return false;
      }
      return errors;
    };
  
    const sendInventoryData = () => {
      const validationResult = validateInventoryForm();
      // eslint-disable-next-line eqeqeq
      if (validationResult == false) {
        alert("form is incomplete");
      } else {
        addInventoryDetails();
      }
    };

    return (
         <FormGroup className={classes.container}>
             <Typography variant="h4">Add New Organization</Typography>
             <FormControl>
                 <InputLabel>Organization</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='Organization'  id='Organization' type="text"  value={Organization} placeholder={errors.OrganizationError} required/>
             </FormControl>
             <FormControl>
                 <InputLabel>Stretcher</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='stretcher'id='stretcher' type="number" value={stretcher} placeholder={errors.stretcherError} required/>
             </FormControl>
             <FormControl>
                 <InputLabel>Life jacket</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='lifejacket' id='lifejacket' type="number" value={lifejacket} placeholder={errors.lifejacketError} required/>
             </FormControl>
             <FormControl>
                 <InputLabel>First aid</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='firstaid'id='firstaid' type="number" value={firstaid} placeholder={errors.firstaidError} required/>
             </FormControl>
             <FormControl>
                 <InputLabel>Bucket</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='bucket' id='bucket' type="number" value={bucket} placeholder={errors.bucketError} required/>
             </FormControl> 
             <FormControl>
                 <InputLabel>gloves</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='gloves' id='gloves'  type="number" value={gloves} placeholder={errors.glovesError} required/>
             </FormControl> 
              <FormControl>
                 <InputLabel>torchlight</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='torchlight' id='torchlight' type="number" value={torchlight} placeholder={errors.torchlightError} required/>
             </FormControl> 
             <FormControl>
                 <InputLabel>safetyhelmet</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='safetyhelmet'id='safetyhelmet' type="number" value={safetyhelmet} placeholder={errors.safetyhelmetError} required/>
             </FormControl>
             <FormControl>
                 <InputLabel> readymadefood</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='readymadefood'id='readymadefood' type="number" value={readymadefood} placeholder={errors.readymadefoodError} required/>
             </FormControl>
             <FormControl>
                 <InputLabel>others</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='others'id='others'  type="number" value={others} placeholder={errors.othersError} required/>
             </FormControl>
             <Button
              variant="contained" 
              color="primary" 
              value="Submit"
               onClick={() => sendInventoryData()} style={{ marginBottom: 200 }}>
                   add organization
              </Button>
         </FormGroup>
    );
};
export default AddInventory;