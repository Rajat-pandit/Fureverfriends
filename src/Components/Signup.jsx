import React from 'react'
import { Grid2,Paper, Button, TextField, Typography} from '@mui/material';
export const Signup = () => {
  const heading={fontSize:"1.5rem", fontWeight:"600"}
  const paperstyle={padding:"5rem", width:"30rem", margin:"100px auto", borderRadius:"1rem", boxShadow:"10px 10px 10ox"};
  const row={display:"flex", marginTop:"2rem"}
  const btnStyle={marginTop:"2rem", fontSize:"1.2rem", fontWeight:"700", backgroundColor:"blue", borderRadius:"0.5rem"}
  return (
    <>
      <Grid2 align="center">
          <Paper sx={{width:{
              xs:'80vw',
              sm:'50vw',
              md:'40vw',
              lg:'30vw',
              xl:'20vw',
          },
            height:'70vh'
            }}>
              <Typography style={heading}>SignUp</Typography>
              <form>
                <TextField style={row} sx={{label: {fontWeight:'600', fontSize:'1rem'}}} fullWidth type="text" label="Name" placeholder='Enter Name'></TextField>
                <TextField style={row} sx={{label: {fontWeight:'600', fontSize:'1rem'}}} fullWidth label="Email" variant="outlined" type="email" placeholder="Enter Email"></TextField>
                <TextField style={row} sx={{label: {fontWeight:'600', fontSize:'1rem'}}} fullWidth label="Password" variant="outlined" type="password" placeholder="Enter Password"></TextField>
                <Button type="submit" variant='contained' style={btnStyle}>SignUp</Button>


              </form>

          </Paper>
      </Grid2>
    </>
  )
}
export default Signup;