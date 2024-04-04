import React from "react";
import {
  Paper,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
} from "@mui/material";
import { Assignment, Devices, Settings } from "@mui/icons-material";
import PeopleIcon from "@mui/icons-material/People";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";
import withAuth from "@/components/withAuth";

function Home({ user }) {
  const router = useRouter();
  const handleLoginClick = () => {
    // Redirige a la página de login
    router.push('/login');
  };
  return (
    <Paper>
      <Typography
        sx={{
          fontSize: 35,
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        CEECI
      </Typography>

      <Typography
        sx={{
          marginTop: 1,
          fontSize: 20,
          display: "flex",
          justifyContent: "center",
        }}
      >
        Siempre un paso adelante. Educación profesional para tu futuro.
      </Typography>

      <CardMedia
        component="img"
        alt="Imagen"
        image='././imgHome.jpg'
        sx={{
          width: 1300,
          margin: "auto",
          display: "block",
          borderRadius: 5,
        }}
      />
      {/* <Typography
        sx={{
          marginTop: 1,
          fontSize: 20,
          display: "flex",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        Somos una organización...
      </Typography> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 14,
          marginBottom: 2,
        }}
      >
        <Button
          type="submit"
          variant="contained"
          sx={{
            marginTop: 2,
            fontWeight: "bold",
            fontSize: 16,
            padding: "10px 30px", 
            width: '300px',
            marginBottom: 4,
            textAlign: "center", 
            backgroundColor: "#30315A"
          }}
          onClick={handleLoginClick}
        >
          Iniciar sesión
        </Button>
      </div>
    </Paper>
  );
}

export default Home;
