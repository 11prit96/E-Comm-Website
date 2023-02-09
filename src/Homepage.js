import { Fragment } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
import { ItemList } from "./Context";
import SingleProduct from "./SingleProduct";
import HomeLoading from "./HomeLoading";

function Homepage() {
  const { products, isLoading } = ItemList();

  const HomeItems = (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Grid container spacing={2}>
        {products?.map((item) => (
          <SingleProduct key={item.id} item={item} />
        ))}
      </Grid>
    </Box>
  );

  const LoadItems = (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Grid container spacing={2}>
        {[...Array(20)].map((i)=> <HomeLoading key={i} item={i}/>)
        }
      </Grid>
    </Box>
  )
  return isLoading ? <Fragment>{LoadItems}</Fragment> : <Fragment>{HomeItems}</Fragment>;
}

export default Homepage;
