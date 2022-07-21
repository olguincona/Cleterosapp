import React, { useContext } from 'react';
import card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

const styles = {
  container: {
    width: window.innerHeight > 900 ? "25%" : "90%",
    flexDirection: "colmun",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "rgba(249, 220, 92, 0.3)"
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 100,
  }
};

const Item = ({ product }) => {

    return(
      <Card sx={{ maxWidth: 345 }} style={styles.container}>
        <CardActionArea>
          <CardMedia 
          component="img"
          height="140"
          image={product.image}
          />
          <CardContent>
            <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={styles.title}
            >
              {product.title}
            </Typography>
            <Typography
            variant="body2"
            color="text.secondary"
            >
              {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}


export default Item