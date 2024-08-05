import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../actions/dataAction";
import { Button } from "@mui/material";
const Addproduct = () => {
  const dispatch = useDispatch();

  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        dispatch(addProduct("/computer"));
      }}
    >
      addproduct
    </Button>
  );
};

export default Addproduct;
