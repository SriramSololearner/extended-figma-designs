import { theme } from "../../theme/config.theme";

export const styles = {
    root: {
        width: "100%", height: "100vh",
        background: `${theme.background}`,
    },
    header: {
        mx: 7,
        py: 4
    },
    headerFirstChild: {},
    listIcon: {
        color: `${theme.txtColor}`,
        fontWeight: "bold",
        display: { xs: "none", sm: "flex" }
    },
    leftArrowIcon: {
        color: `${theme.primary}`,
        fontWeight: "bold",
        display: { xs: "flex", sm: "none" }
    },
    newAddrTxt: {
        color: `${theme.txtColor}`,
        fontWeight: 500,
        display: { xs: "flex", sm: "none" }
    },

    stack: {
        display: "flex", flexDirection: { xs: "column", sm: 'row' }
    },
    addresTxt: {
        color: `${theme.txtColor}`,
        fontWeight: 500,
        display: { xs: "none", sm: "flex" }
    },

    Cancelbtn: {
        width: "9.5em",
        height: "3.5em",
        borderColor: `${theme.primary}`,
        color: `${theme.primary}`,
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "bold",
        ml: 3,
        "&:hover": {
            borderColor: `${theme.primary}`,
            opacity: "0.8"
        },
    },
    Savebtn: {
        width: "9.5em",
        background: `${theme.primary}`,
        color: `${theme.color}`,
        borderRadius: "20px",
        fontSize: "12px",
        fontWeight: "bold",
        "&:hover": {
            background: `${theme.primary}`,
            opacity: 0.8,
        },
    },

    headerSecondChild: {
        background: `${theme.color}`,
        width: "165px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        fontWight: 600,
        borderRadius: "15px",
        boxShadow: "0px 0px 2px 2px #ccc",
        cursor: "pointer",
        alignSelf: { xs: "flex-end", }
    },
    locationIcon: {
        width: "20px",
        height: "20px"
    },
    locationTxt: {
        fontSize: "12px"
    },

    inputContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `${theme.color}`,
        borderRadius: "10px",
        pb: 2,
        mb: 2,
        pr: 1,
    },
    FormContainer: {
        ml: { xs: 2, md: 3 },

    },
    input: {
        "& label.Mui-focused": {
            color: `${theme.inputTxt}`,
        },
        "&.MuiTextField-root": {
            background: "#E4F4FC",
            borderRadius: "13px",
            width: { xs: "98%", sm: "100%", md: "100%", lg: "95%" },
            height: { xs: "3.2em", md: "3.3em", },
            mb: 0.5,
        },
        "&.MuiInputBase-root": {
            background: "#E4F4FC",
        },

        "& input": {
            color: `${theme.inputTxt}`,
            height: "9%",
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
}