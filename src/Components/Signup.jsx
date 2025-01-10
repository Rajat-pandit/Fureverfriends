import React, { useState } from 'react'
import './Signup.css'
import { Grid2,Paper, Button, TextField, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Signup = () => {
  const heading={fontSize:"1.5rem", fontWeight:"600"}
  const paperstyle={padding:"5rem", width:"30rem", margin:"100px auto", borderRadius:"1rem", boxShadow:"10px 10px 10ox"};
  const row={display:"flex", marginTop:"2rem"}
  const btnStyle={marginTop:"2rem", fontSize:"1.2rem", fontWeight:"700", backgroundColor:"blue", borderRadius:"0.5rem"}

  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");


  const navigate= useNavigate();
  const handleSignup=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/signup", {name,email,password})
      .then(result =>{
        if(result.status===201){
          console.log("User created sucessfully.");
          navigate('/login');
        }
      })
      .catch(err => {
        if(err.response && err.response.status===400){
          window.alert("Email already exists. Please use a different email.");

        }else{
          console.log(err);
        }
      });
    
  };
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
              <form onSubmit={handleSignup}>
                <TextField onChange={(e)=>setName(e.target.value)} name="name" required style={row} sx={{label: {fontWeight:'600', fontSize:'1rem'}}} fullWidth type="text" label="Name" placeholder='Enter Name'></TextField>
                <TextField onChange={(e)=>setEmail(e.target.value)} name="email" required style={row} sx={{label: {fontWeight:'600', fontSize:'1rem'}}} fullWidth label="Email" variant="outlined" type="email" placeholder="Enter Email"></TextField>
                <TextField onChange={(e)=>setPassword(e.target.value)} ame="password" required style={row} sx={{label: {fontWeight:'600', fontSize:'1rem'}}} fullWidth label="Password" variant="outlined" type="password" placeholder="Enter Password"></TextField>
                <Button type="submit" variant='contained' style={btnStyle} >SignUp</Button>


              </form>

          </Paper>
      </Grid2>
    </>
  )
}
export default Signup;