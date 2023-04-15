import { FormControl, FormGroup, Typography,styled,Button} from '@mui/material'
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';
import React from 'react'

const Container=styled(FormGroup)`width:50%;margin: 5% auto 0 auto;& >div{
    margin-top:20px
}`
const Adduser = () => {
  return (
    <div>
     <Container>
     <Typography variant="h4" component="h2">
   Add user
</Typography>
        <FormControl>
<InputLabel>Name</InputLabel>
<Input/>
        </FormControl>
        <FormControl>
<InputLabel>Email</InputLabel>
<Input/>
        </FormControl>
 
        <FormControl>
<InputLabel  >Password</InputLabel>
<Input 
         
          type="password"/>
        </FormControl>
        <FormControl>
<InputLabel>Mobileno</InputLabel>
<Input/>
        </FormControl>
        <FormControl>
        <Button variant="contained">Adduser</Button>
        </FormControl>
     </Container>
    </div>
  )
}

export default Adduser
