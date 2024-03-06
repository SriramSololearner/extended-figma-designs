import {
  Box,
  IconButton,
  InputAdornment,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styles } from "./mobilePageStyles";
import LoginButton from "../common/button/LoginButton";
import goggle from "../../assets/login/1.png";
import facebook from "../../assets/login/2.png";
import twitter from "../../assets/login/3.png";
import linkedIn from "../../assets/login/4.png";
import img from "../../assets/login/img.png";
import CloseIcon from "@mui/icons-material/Close";
import { Email, Lock } from "@mui/icons-material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Formik } from "formik";
import * as Yup from "yup";
import usePassword from "../common/custom_hook/showPassword";
import { useState } from "react";
import { signinUrl } from "../../utilities/constants";
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
const LoginMobile = () => {
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
    <Box sx={styles.root}>
      <Snackbar
        variant={variant}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={msg}
        action={action}
      />
      <Box sx={styles.leftContainer}>
        <Box sx={styles.loginContainer}>
          <Stack direction={"row"} sx={styles.LoginTxt} gap={0.7}>
            <Box>Login</Box>
            <Box>Account</Box>
          </Stack>
        </Box>
        <Box sx={styles.registerContainer}>
          <Box sx={styles.registerTxt}>Register</Box>
        </Box>
      </Box>
      <Box sx={styles.rightContainer}>
        <Stack alignItems={"flex-start"} mt={5} ml={3}>
          <Box sx={styles.welcomeTxt}>Welcome</Box>
          <Box sx={styles.welcomeTxt}>Back!</Box>
          <Box sx={styles.descrTxt}>Welcome Back You've Been </Box>
          <Box sx={styles.descrTxt}>Missed!</Box>
        </Stack>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            loginApi(values);
          }}
        >
          {(props) => (
            <Box component={"form"} onSubmit={props.handleSubmit}>
              <Stack sx={styles.inputContainer}>
                <Typography sx={styles.loginAccTxt}>Login Account</Typography>
                <TextField
                  id="outlined-basic"
                  placeholder="Email address"
                  type="email"
                  name="email"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  onFocus={props.handleBlur}
                  value={props.values.email}
                  error={props.touched.email && Boolean(props.errors.email)}
                  helperText={props.touched.email && props.errors.email}
                  sx={styles.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  id="outlined-basic-pssword"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  onFocus={props.handleBlur}
                  value={props.values.password}
                  error={
                    props.touched.password && Boolean(props.errors.password)
                  }
                  helperText={props.touched.password && props.errors.password}
                  sx={styles.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
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
                <Typography sx={styles.forgotTxt}>Forgot Password?</Typography>
                <LoginButton />
              </Stack>
            </Box>
          )}
        </Formik>

        <Stack direction={"column"}>
          <Box sx={styles.continueWith}>Or Continue with</Box>
          <Stack direction={"row"} justifyContent={"center"} gap={1}>
            <Box component={"img"} src={goggle} sx={styles.socialMedia} />
            <Box component={"img"} src={facebook} sx={styles.socialMedia} />
            <Box component={"img"} src={twitter} sx={styles.socialMedia} />
            <Box component={"img"} src={linkedIn} sx={styles.socialMedia} />
          </Stack>
        </Stack>
        <Box>
          <Box component={"img"} src={img} sx={styles.bannerImg} />
        </Box>
      </Box>
    </Box>
  );
};

export default LoginMobile;
