import { theme } from "../../theme/config.theme";

export const styles = {
    root: {
        display: { xs: "flex", sm: "none", },
        height: "105vh",
        width: "100%",
    },
    leftContainer: {
        background: `${theme.secondary}`,
        width: "15%",

    },
    loginContainer: {
        width: "100%",
        pt: 8,
        pb: 5,
        height: "15%", background: `${theme.primary}`,
    },
    LoginTxt: { transform: "rotate(90deg)", width: "100%", color: `${theme.txtColor}`, fontWeight: 600, fontSize: '15px' },
    registerContainer: {
        width: "100%",
        height: "40%",
        pt: 10,

    },
    registerTxt: {
        transform: "rotate(90deg)", width: "100%",
        color: `${theme.regiterTxt}`

    },
    rightContainer: {
        width: "100vw",
        background: '#E4F4FC',
    },
    welcomeTxt: {
        color: `${theme.headerTxtMobile}`,
        fontSize: { xs: "28px", sm: "30px", md: "35px", lg: "48px" },
        fontWeight: 900,
        fontFamily: "Poppins",
        lineHeight: "1em",
    },
    descrTxt: {
        color: `${theme.headerTxtMobile}`,
        my: 1,
        fontSize: "14px",
        lineHeight: "0.3em",
    },
    inputContainer: {
        width: "90%",
        height: "fit-content",
        display: 'flex',
        gap: 0.5,
        ml: 2,
        mt: 5,
    },

    loginAccTxt: { width: "40%", fontWeight: 600, fontSize: "13px", color: "#414042" },
    email: {
        "& label.Mui-focused": {
            color: `${theme.inputTxt}`,
        },
        "&.MuiTextField-root": {
            background: { xs: `${theme.txtColor}`, md: "#E4F4FC" },
            borderRadius: "13px 13px 0px 0px",
            width: { xs: "95%", },

        },

        "& input": {
            color: `${theme.inputTxt}`,
            "&::placeholder": { color: `${theme.inputTxt}`, opacity: 1 },
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: { xs: "0", md: "2px solid #E4F4FC" },
                borderRadius: "13px",
                color: `${theme.inputTxt}`,
            },
            "&:hover fieldset": {
                borderColor: "#E4F4FC",
            },
            "&.Mui-focused fieldset": {
                borderColor: `${theme.primary}`,
                // backgroundColor: "white",
                color: "black",
            },
        },
    },
    password: {
        "& label.Mui-focused": {
            color: `${theme.inputTxt}`,
        },
        "&.MuiTextField-root": {
            background: { xs: `${theme.txtColor}`, md: "#E4F4FC" },
            borderRadius: "0px 0px 13px 13px",
            width: { xs: "95%", },
            height: { xs: "3em" },
        },

        "& input": {
            color: `${theme.inputTxt}`,
            "&::placeholder": { color: `${theme.inputTxt}`, opacity: 1 },
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: { xs: "0", md: "2px solid #E4F4FC" },
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
    },
    forgotTxt: {
        width: "90%",
        fontSize: "13px",
        lineHeight: "28px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        mt: 3
    },
    continueWith: { my: 1.5, fontSize: "14px", color: `${theme.headerTxtMobile}` },
    socialMedia: {
        width: "2.5em",
        height: "2.5em",
        cursor: "pointer",
        "&: hover": {
            opacity: 0.8,
        },
    },
    bannerImg: {
        position: "absolute",
        left: "-7%",
        width: "350px",
        height: "250px"
    }

}