import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";
import ActionButton from "./ActionButton";
import { Box } from "@mui/material";

export default function ItemPage() {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const stringID = id.toString();

  useEffect(() => {
    async function fetchItem() {
      const response = await fetch(
        `https://fakestoreapi.com/products/${stringID}`
      );
      const item = await response.json();
      setItem(item);
    }

    fetchItem();
  }, [stringID]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ margin: 20, width: 600, backgroundColor: "#EBEBF0" }}>
        <Typography
          variant="h5"
          component="div"
          sx={{ textAlign: "center", m: 5 }}
        >
          {item.title}
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            height="300"
            image={item.image}
            alt="store item"
            sx={{ objectFit: "cover", width: 275, borderRadius: 5 }}
          />
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Alert variant="body1" sx={{ textAlign: "center", mt: 5 }}>
            {item.description}
          </Alert>
          <ActionButton />
        </Box>
      </Card>
    </div>
  );
}
