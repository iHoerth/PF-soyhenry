import Box from "@mui/material/Box";
import { Stack, Divider, Card } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import MyDoctors from "../MyDoctors/MyDoctors";
import MyDates from "../MyDates/MyDates";
import EditProfile from "../EditProfile/EditProfile";
import MyOpinions from "../MyOpinions/MyOpinions";
import { useTheme } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { Context } from "../../../context/ContextProvider";
import Loading from "../../../components/Loading/Loading";

const PatientData = () => {
  const theme = useTheme();
  const [value, setValue] = useState("1");
  const { vista, setVista } = useContext(Context)[3];
  const [loading, setLoading] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const views = ["Mis Medicos", "Mis Citas", "Editar Perfil", "Ver Opiniones"];
  const handleClick = (event) => {
    const index = views.findIndex((el) => el === event.target.innerHTML);
    console.log(index);
    setVista(index);
  };

  return (
    <Stack
      direction="row"
      sx={{
        border: "1px solid",
        borderColor: "#bababa",
        height: "63vh",
        width: "100%",
      }}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <Box
        sx={{
          height: "63vh",
          width: "200px",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            backgroundColor: theme.palette.primary.main,
          }}
          component="nav"
          aria-labelledby="list-subheader"
          subheader={
            <ListItemButton>
              <ListItemText
                primaryTypographyProps={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
                sx={{ m: "0px", color: "white", padding: "10px" }}
                primary="Mis Medicos"
                onClick={handleClick}
              />
            </ListItemButton>
          }
        >
          <Divider />
          <ListItemButton>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "15px",
                fontWeight: "500",
              }}
              sx={{ m: "0px", color: "white", padding: "10px" }}
              primary="Mis Citas"
              onClick={handleClick}
            />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "15px",
                fontWeight: "500",
              }}
              sx={{ m: "0px", color: "white", padding: "10px" }}
              primary="Editar Perfil"
              onClick={handleClick}
            />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primaryTypographyProps={{
                fontSize: "15px",
                fontWeight: "500",
              }}
              sx={{ m: "0px", color: "white", padding: "10px" }}
              primary="Ver Opiniones"
              onClick={handleClick}
            />
          </ListItemButton>
          <Divider />
        </List>
      </Box>
      <Box
        sx={{
          height: "85vh",
          width: "90vw",
          m: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "top",
          alignItems: "left",
        }}
      >
        {vista === 0 ? (
          <MyDoctors />
        ) : vista === 1 ? (
          <MyDates />
        ) : vista === 2 ? (
          <EditProfile />
        ) : vista === 3 ? (
          <MyOpinions />
        ) : null}
      </Box>
    </Stack>
  );
};

export default PatientData;
