import react, {  useState, useEffect } from 'react';
import { FormGroup, FormControl, Input, InputLabel, Button, Typography, makeStyles } from '@material-ui/core';
import { editInventory, getInventories } from '../../services/inventories.api';
import { useHistory, useParams } from 'react-router-dom';

//takes the values from the db object
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
	others: ""
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


const EditInventory = () => {
    const [ inventory, setInventory ] = useState(initialValue);
    const { Organization,stretcher,lifejacket,firstaid,bucket,gloves,torchlight,
            safetyhelmet,readymadefood,
            others } = inventory;
    const { id } = useParams();
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        loadInventoryDetails();
    }, []);

    const loadInventoryDetails = async () => {
        const response = await getInventories(id);
        setInventory(response.data);
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setInventory({...inventory, [e.target.name]: e.target.value})
    }
    
    const editInventoryDetails = async() => {
        await editInventory(id, inventory);
        history.push('/Inventories');
    }

    return (
         <FormGroup className={classes.container}>
             <Typography variant="h4">Edit Inventory</Typography>
             <FormControl>
                 <InputLabel>Organization</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='Organization'  id='Organization' type="text" required value={Organization}/>
             </FormControl>
             <FormControl>
                 <InputLabel>Stretcher</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='stretcher' id='stretcher'type="number" required value={stretcher}/>
             </FormControl>
             <FormControl>
                 <InputLabel>Life jacket</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='lifejacket'  id='lifejacket' type="number" required value={lifejacket}/>
             </FormControl>
             <FormControl>
                 <InputLabel>First aid</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='firstaid' id='firstaid' value={firstaid}/>
             </FormControl>
             <FormControl>
                 <InputLabel>Bucket</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='bucket' id='bucket' type="number" required value={bucket}/>
             </FormControl> 
             <FormControl>
                 <InputLabel>gloves</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='gloves' id='gloves' type="number" required value={gloves}/>
             </FormControl> 
              <FormControl>
                 <InputLabel>torchlight</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='torchlight'id='torchlight' type="number" required value={torchlight}/>
             </FormControl> 
             <FormControl>
                 <InputLabel> safetyhelmet</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name=' safetyhelmet'id=' safetyhelmet' type="number" required value={ safetyhelmet}/>
             </FormControl>
             <FormControl>
                 <InputLabel> readymadefood</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name=' readymadefood'id=' readymadefood' type="number" required value={ readymadefood}/>
             </FormControl>
             <FormControl>
                 <InputLabel>others</InputLabel>
                 <Input onChange={(e) => onValueChange(e)} name='others'  id='others'type="number" required value={others}/>
             </FormControl>
             <Button variant="contained" color="primary" onClick={() => editInventoryDetails()} >edit inventory</Button>
         </FormGroup>
    )
}
export default EditInventory;