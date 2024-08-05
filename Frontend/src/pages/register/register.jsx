import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {Box,Button, Grid,Typography,OutlinedInput,InputAdornment} from '@mui/material'
import { addUser } from "../../actions/userAction";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useSelector } from 'react-redux'

import history from "../../routers/history";

const Register = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  const [passVisible, setPassVisible] = useState(false);
  const [user, setUser] = useState([
    {
      id:0,
      username: "",
      password: "",
      eposta:"",
      role:false,
    },
  ]);
  return (
    <Box 
    sx={{
      width:"345px",
      position:"absolute",
      top:"50%",
      left:"50%",
      transform:"translate(-50%,-50%)",
      borderRadius:"10px",
      padding:"20px",
      boxShadow: "0px 4px 20px rgba(194, 194, 194, 0.25)",
   }}>
      <Grid container rowSpacing={2.5} columnSpacing={2}>
          <Grid item xs={12} sx={{textAlign:"center"}}>
            <Typography variant="h3">REGISTER</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>Username</Typography>
            <OutlinedInput
              sx={{width:"100%"}}
              placeholder="Username"
              value={user[0].usernamer}
              onChange={(e) => {
              user[0].username = e.target.value;
            setUser([...user]);
          }}
        />
          </Grid>
          <Grid item xs={12}>
            <Typography>Password</Typography>
            <OutlinedInput
              sx={{width:"100%"}}
              placeholder="Password"
              value={user[0].password}
              type={passVisible ? "text" : "password"}
              endAdornment={
                <InputAdornment
                  position="end"
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setPassVisible(!passVisible);
                  }}
                >
                  {passVisible ? (
                    <VisibilityOffOutlinedIcon />
                  ) : (
                    <VisibilityOutlinedIcon />
                  )}
                </InputAdornment>
              }
              onChange={(e) => {
              user[0].password = e.target.value;
              
            setUser([...user]);
          }}
        />
          </Grid>
          <Grid item xs={12}>
            <Typography>E posta</Typography>
            <OutlinedInput
              sx={{width:"100%"}}
              placeholder="E posta"
              value={user[0].eposta}
              onChange={(e) => {
              user[0].eposta = e.target.value;
            setUser([...user]);
          }}
        />
          </Grid>
          <Grid item xs={6}>
              <Button variant="contained" color="inherit" sx={{width:"100%"}} onClick={()=>{history.push(`/`);}}>Login</Button>
          </Grid>
          <Grid item xs={6}>
              <Button variant="contained" sx={{width:"100%"}} onClick={(e)=>{
                e.preventDefault();
                dispatch(addUser(user,users));
                history.push(`/`);}}>Sign Up</Button>
          </Grid>
      </Grid>
    </Box>
  )
}

export default Register