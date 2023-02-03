import React, { useState, Fragment } from "react";
import Button from "@mui/material/Button";

const ActionButton = () => {
  const [toAdd, setToAdd] = useState(true);

  function toggle() {
    setToAdd((val) => !val);
  }

  return (
    <Fragment>
      {toAdd ? (
        <Button variant="contained" color="success" onClick={toggle}>
          Add to Cart
        </Button>
      ) : (
        <Button variant="outlined" color="error" onClick={toggle}>
          Remove
        </Button>
      )}
    </Fragment>
  );
};

export default ActionButton;
