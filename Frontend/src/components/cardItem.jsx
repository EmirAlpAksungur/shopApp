import React from 'react'
import {Grid,Typography,Button} from '@mui/material';

const cardItem = (props) => {

  return (
    <Grid item xs={12} sm={6} md={3.5} sx={{margin:"10px auto",boxShadow:"0px 4px 20px rgba(194, 194, 194, 0.25)"}}>
        <img src={`${props.props.imgUrl}`} alt="" width="100%"/>
        <Typography variant="h4" sx={{textAlign:"center"}}>
            {props.props.title}
        </Typography>
        <Grid container justifyContent="space-between">
            <Grid item xs>
                <Typography variant="body" sx={{textAlign:"center"}}>
                    {props.props.explanation}
                </Typography>
                <br />
                <br />
                
                <Typography variant="body" sx={{textAlign:"center"}}>
                    {props.props.price}
                </Typography>
            </Grid>
            <Grid item xs={2} sx={{pr:3}}>
                <Button variant="contained" sx={{width:"100%",height:"80%"}}>Satın al</Button>
            </Grid>
        </Grid>
        
    </Grid>
  )
}

export default cardItem