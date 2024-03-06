import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/login/logo.png";
import { loginPageStyles } from "./styles";
import img from "../../assets/login/img.png";
import LoginButton from "../common/button/LoginButton";
import goggle from "../../assets/login/1.png";
import facebook from "../../assets/login/2.png";
import twitter from "../../assets/login/3.png";
import linkedIn from "../../assets/login/4.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import usePassword from "../common/custom_hook/showPassword";
import { signinUrl } from "../../utilities/constants";
import React, { useState } from "react";

interface Istate {
  open: boolean;
  msg: string;
  variant: "success" | "error";
}
declare module "@mui/material/Snackbar" {
  interface SnackbarProps {
    variant: "success" | "error";
  }
}
const LoginPage = () => {
  const { showPassword, handleClickShowPassword } = usePassword(false);
  const [open, setOpen] = useState<Istate["open"]>(false);
  const [variant, setVariant] = useState<Istate["variant"]>("success");
  const [msg, setMsg] = useState<Istate["msg"]>("");
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setMsg("");
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^[a-z0-9.!@#%^&*()]+@[a-z]+\.[a-z]{2,4}$/,
        "*Enter a valid email with (@, .)"
      )
      .email("*Invalid email")
      .required("*Email is required"),
    password: Yup.string()
      .min(8, "*Password must be at least 8 characters")
      .matches(
        /(?=.*[a-z])(?=.*[A-Z])\w+/,
        "* At least one uppercase and lowercase character"
      )
      .matches(/\d/, "*Password should contain at least one number")
      .matches(
        /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
        "*At least one special character"
      )
      .required("*Password is required"),
  });

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  const loginApi = async (values: { email: string; password: string }) => {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };
    const response = await fetch(signinUrl, options);
    const res = await response.json();

    if (res.status) {
      setVariant("success");
      setOpen(true);
      setMsg(res.message);
    }
    if (!res.status) {
      setOpen(true);
      setMsg(res.message);
      setVariant("error");
    }
  };
  return (
    <Grid container sx={loginPageStyles.root}>
      <Grid item sm={12} md={12} lg={12} sx={loginPageStyles.leftContainer}>
        <Snackbar
          variant={variant}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={msg}
          action={action}
        />
        <Stack
          direction={"column"}
          gap={5}
          sx={loginPageStyles.leftContainer.innerContainer}
        >
          <Box
            component={"img"}
            src={logo}
            sx={loginPageStyles.leftContainer.innerContainer.logo}
          />
          <Stack
            direction={"column"}
            alignItems={"flex-start"}
            sx={loginPageStyles.leftContainer.innerContainer.subContainer}
          >
            <Stack alignItems={"flex-start"}>
              <Box sx={loginPageStyles.leftContainer.innerContainer.welcomeTxt}>
                Welcome
              </Box>
              <Box sx={loginPageStyles.leftContainer.innerContainer.welcomeTxt}>
                Back!
              </Box>
              <Box sx={loginPageStyles.leftContainer.innerContainer.descrTxt}>
                welcome back you've been missed!
              </Box>
            </Stack>
            <Box
              sx={loginPageStyles.leftContainer.innerContainer.btnsContainer}
            >
              <Box
                sx={
                  loginPageStyles.leftContainer.innerContainer.btnsContainer
                    .login
                }
              >
                Login Account
              </Box>
              <Box
                sx={
                  loginPageStyles.leftContainer.innerContainer.btnsContainer
                    .register
                }
              >
                Register
              </Box>
            </Box>
          </Stack>
          <Box
            component={"img"}
            src={img}
            sx={loginPageStyles.leftContainer.innerContainer.rightImage}
          />
        </Stack>
      </Grid>
      <Grid item sm={12} md={12} lg={12} sx={loginPageStyles.rightContainer}>
        <Box sx={loginPageStyles.rightContainer.innerContainer}>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              loginApi(values);
            }}
          >
            {(props) => (
              <Box
                component={"form"}
                onSubmit={props.handleSubmit}
                sx={loginPageStyles.rightContainer.innerContainer.formContainer}
              >
                <TextField
                  id="outlined-basic"
                  label="Email address"
                  variant="outlined"
                  type="text"
                  name="email"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  onFocus={props.handleBlur}
                  value={props.values.email}
                  error={props.touched.email && Boolean(props.errors.email)}
                  helperText={props.touched.email && props.errors.email}
                  sx={loginPageStyles.rightContainer.innerContainer.input}
                />

                <TextField
                  id="outlined-basic"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  name="password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  onFocus={props.handleBlur}
                  value={props.values.password}
                  error={
                    props.touched.password && Boolean(props.errors.password)
                  }
                  helperText={props.touched.password && props.errors.password}
                  sx={loginPageStyles.rightContainer.innerContainer.input}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <LoginButton />
              </Box>
            )}
          </Formik>

          <Stack
            direction={"row"}
            alignSelf={"start"}
            sx={loginPageStyles.rightContainer.innerContainer.forgotTxContainer}
          >
            <Box sx={loginPageStyles.rightContainer.innerContainer.forgotTxt}>
              Forgot Password?
            </Box>
            <Stack direction={"row"} gap={1}>
              <Box
                component={"img"}
                src={goggle}
                sx={loginPageStyles.rightContainer.innerContainer.socialMedia}
              />
              <Box
                component={"img"}
                src={facebook}
                sx={loginPageStyles.rightContainer.innerContainer.socialMedia}
              />
              <Box
                component={"img"}
                src={twitter}
                sx={loginPageStyles.rightContainer.innerContainer.socialMedia}
              />
              <Box
                component={"img"}
                src={linkedIn}
                sx={loginPageStyles.rightContainer.innerContainer.socialMedia}
              />
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
