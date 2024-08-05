import React,{useEffect,useState} from 'react'
import axios from 'axios'

import Card from '../../../components/card';
const Hoc = (props) => {
  const [value,setValue] = useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3000/${props.props}`).then((data)=>{
        setValue(data.data)   
    })
  },[])
  return (
    <Card props={value} />
  )
}

export default Hoc