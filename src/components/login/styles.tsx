import { theme } from "../../theme/config.theme";
export const loginPageStyles = {
  root: {
    display: { xs: "none", sm: "flex" },
  },
  leftContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "45vh",
    background: `${theme.secondary}`,
    innerContainer: {
      position: "relative",
      width: "20%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      mx: "5em",
      my: "2em",
      logo: {
        width: "9.5em",
        height: "2.5em",
      },

      subContainer: {
        display: "flex",
        gap: {
          xs: "0.5em",
          sm: "2.7em",
          md: "2.1em",
          lg: "2.6em",
          xl: "2.9em",
        },
      },
      welcomeTxt: {
        color: `${theme.headerTxtWeb}`,
        fontSize: { xs: "28px", sm: "30px", md: "35px", lg: "48px" },
        fontWeight: 900,
        fontFamily: "Poppins",
        lineHeight: "1em",
      },
      descrTxt: {
        color: `${theme.headerTxtWeb}`,
        my: 1,
        fontSize: "16px",
      },

      btnsContainer: {
        display: "flex",
        justifyContent: "center",
        gap: 8,
        cursor: "pointer",

        login: {
          width: "165px",
          height: "18px",
          background: `${theme.primary}`,
          color: `${theme.txtColor}`,
          py: 3,
          px: 4,
          borderRadius: "20px 20px 0px 0px",
          fontWeight: 600,
          "&:hover": {
            opacity: 0.8,
          },
        },
        register: {
          height: "18px",
          color: `${theme.regiterTxt}`,
          py: 3,
          px: 4,
          borderRadius: "20px 20px 0px 0px",
          fontWeight: 600,
          "&:hover": {
            opacity: 0.8,
          },
        },
      },
      rightImage: {
        position: "absolute",
        left: "185%",
        top: { sm: "-3%", lg: "-7%" },
        width: { xs: "0em", md: "28em", lg: "42em" },
        height: { xs: "0em", md: "22em", lg: "27em" },
      },
    },
  },
  rightContainer: {
    width: "100%",
    height: "55vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `${theme.secondContainer}`,

    innerContainer: {
      width: { xs: "auto", md: "100%", lg: "100%" },
      height: { sm: "45vh", md: "30vh" },
      maxWidth: "1211px",
      maxHeight: "317px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      background: "white",
      borderRadius: "30px",
      dropShadow: "0px 4px 50px 0px #000000",
      formContainer: {
        display: "flex",
        flexDirection: { sm: "column", md: "row", lg: "row" },
        gap: 3,
        mb: 2,
        mt: 5,
      },
      input: {
        "& label.Mui-focused": {
          color: `${theme.inputTxt}`,
        },
        "&.MuiTextField-root": {
          background: "#E4F4FC",
          borderRadius: "13px",
          width: { sm: "100%", md: "18em", lg: "28em" },
          height: { sm: "3.6em" },
        },

        "& input": {
          color: `${theme.inputTxt}`,
          "&::placeholder": { color: `${theme.inputTxt}`, opacity: 1 },
          cursor: "pointer",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            border: "2px solid #E4F4FC",
            borderRadius: "13px",
            color: `${theme.inputTxt}`,
          },
          "&:hover fieldset": {
            borderColor: "#E4F4FC",
          },
          "&.Mui-focused fieldset": {
            borderColor: `${theme.primary}`,
            color: "black",
          },
        },
        animation: "form-animation 0.5s ease-in-out ",
      },
      forgotTxContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: { sm: 2, md: 6 },
        mx: { sm: 10, md: 22 },
        mb: 5,
        mt: { md: 4 },
      },

      forgotTxt: {
        color: "#414042",
        fontSize: { sm: "10px", md: "15px" },
        fontWeight: 500,
      },
      error: { color: "red", fontSize: "12px", fontWeight: "600" },

      socialMedia: {
        width: { sm: "1.8em", md: "2.5em" },
        height: { sm: "1.8em", md: "2.5em" },
        cursor: "pointer",
        "&: hover": {
          opacity: 0.8,
        },
      },
    },
  },
};
