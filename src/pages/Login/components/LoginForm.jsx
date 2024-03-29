import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";

import { useLoginStyle } from "../../../assets/styles/useLoginStyle";
import { useUserDataContext } from "../../../context/UserDataContext";
import AdminCheckbox from "./AdminCheckbox";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import Localizator from "../../../common/components/Localizator";
import AuthService from "../../../services/auth.service";

const LoginForm = () => {
  const navigate = useNavigate();
  const classes = useLoginStyle();

  const { setUserData } = useUserDataContext();
  const [inputData, setInputData] = useState({
    email: "",
    pass: "",
    isAdmin: false,
    error: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, pass, isAdmin } = inputData;

    try {
      if (email && pass) {
        const response = await AuthService.Login(
          inputData.email,
          inputData.pass
        );

        localStorage.setItem(JSON.stringify(response.data));

        setUserData({
          isLoggedIn: true,
          isAdmin: inputData.isAdmin,
          userData: {
            email: inputData.email,
            nickname: inputData.email.toUpperCase(),
          },
        });

        if (isAdmin) {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      }
    } catch (error) {
      console.log(error);

      if (!email || !pass) {
        setInputData((prev) => {
          return {
            ...prev,
            error: true,
          };
        });
      }
    }
  };

  return (
    <Grid
      p={{ xs: "6", md: "12" }}
      direction="column"
      position="relative"
      container>
      <Typography
        textAlign="center"
        variant="h3"
        component="p"
        textTransform="uppercase">
        Login
      </Typography>
      <Box onSubmit={handleSubmit} component="form" className={classes.root}>
        <EmailInput
          value={inputData.email}
          onChange={setInputData}
          error={inputData.error}
        />
        <PasswordInput
          value={inputData.pass}
          onChange={setInputData}
          error={inputData.error}
        />
        <AdminCheckbox value={inputData.isAdmin} onChange={setInputData} />
        <Button
          color="inherit"
          type="submit"
          sx={{
            marginTop: "40px",
          }}
          variant="outlined">
          <Localizator str="Login" />
        </Button>
      </Box>
    </Grid>
  );
};

export default LoginForm;
