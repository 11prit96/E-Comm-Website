import * as React from "react";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Grid} from "@mui/material";
import Chip from "@mui/material/Chip";
import { ItemsContext } from "./Context";
import { Link } from "react-router-dom";
import ActionButton from "./ActionButton";

function Homepage() {
  const itemList = React.useContext(ItemsContext);

  const HomeItems = (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Grid container spacing={2}>
        {itemList?.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Card
              sx={{
                width: "300px",
                height: "400px",
                backgroundColor: "#f0f0f5",
              }}
            >
              <Typography textAlign={"center"} m={2}>
                {item.category.toUpperCase()}
              </Typography>
              <Link
                to={`${item.id}`}
                style={{ textDecoration: "none", color: "#111" }}
              >
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    src={item.image}
                    alt="item.title"
                    width="200px"
                    height="200px"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    height: "20px",
                    overflowY: "hidden",
                    textOverflow: "ellipsis",
                    m: 2,
                  }}
                >
                  {item.title}
                </Typography>
              </Link>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Chip label={`$${item.price}`} sx={{mb: 1}}/>
                <ActionButton/>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return <React.Fragment>{HomeItems}</React.Fragment>;
}

Homepage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Homepage;
