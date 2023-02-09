import React, { Fragment } from "react";
import Button from "@mui/material/Button";
import { ItemList } from "./Context";

const ActionButton = ({ prod }) => {
  const { cart, addItem } = ItemList()
  
  return (
    <Fragment>
      {cart.some((p) => p.id === prod.id) ? (
        <Button variant="contained" disabled>
        Added to Cart
      </Button>
      ) : (
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            addItem(prod)
          }}
        >
          Add to Cart
        </Button>
      )}
    </Fragment>
  );
};

export default ActionButton;
