import { SxProps } from "@mui/material";
import { theme } from "../../theme/config.theme";

export const styles = {
  root: {
    background: `${theme.background}`,
    width: "100%",
    transition: "all 0.5s  ease-in-out",
  },
  navBar: {
    pt: 5,
    ml: { xs: 2, md: 4 },
  },
  listIcon: {
    color: `${theme.txtColor}`,
    fontWeight: 600,
  },
  helpCenterTxt: {
    color: `${theme.txtColor}`,
    fontWeight: 500,
  },
  addQueryBtn: {
    mr: { xs: 3, sm: 3, md: 4, lg: 7 },
    background: `${theme.primary}`,
    textTransform: "capitalize",
    fontWeight: 600,
    borderRadius: "10px",
    display: { xs: "none", md: "flex" },
    "&:hover": {
      background: `${theme.primary}`,
      opacity: 0.8,
    },
  },

  addBtn: {
    position: "fixed",
    bottom: 20,
    right: 10,
  },
  addBtnIcon: {
    display: { xs: "flex", md: "none" },
    color: `${theme.primary}`,
    fontSize: "50px",
    boxShadow: "0px 0px 5px 2px #ffff",
  },
  queriesHeader: {
    width: { xs: "85.5%", sm: "93.5%", md: "92%", lg: "93.5%" },
    background: `${theme.queryHeader}`,
    display: "flex",
    alignItems: "center",
    height: "45px",
    pl: { xs: 2, md: 5 },
    ml: { xs: 2, md: 1 },
    mt: 2,
    borderRadius: "10px",
  },
  queriesHeaderTxt: {
    color: { xs: "#7D8387", md: "#000000" },
    fontWeight: "bold",
    fontSize: { xs: "12px", md: "13px" },
  },
  modalContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  closeIcon: {
    cursor: "pointer",
    alignSelf: "flex-end",
    position: "absolute",
    top: "-45px",
    right: "-38px",
    background: "#ffffff",
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 0px 1px 1px #5555",
  },
  closeElement: {
    fontSize: "14px",
  },
  gridContainer: {
    background: { md: "#ffffff" },
    width: { xs: "96%", md: "96%" },
    mt: 1,
    borderRadius: 2,
    ml: { xs: 0, md: 1 },
    pb: 5,
    pl: { xs: 0, md: 5, lg: 8 },
    pr: { xs: 2, md: 5, lg: 10 },
  },
  gridItem: {
    width: "100%",
    height: "5em",
    background: { xs: "#ffffff", md: `${theme.background}` },
    borderRadius: 2,
    display: "flex",
    alignItems: "flex-start",
    pl: { xs: 0, md: 1 },
    pt: 2,
    overflowY: "auto",
    overflowX: "hidden",
    overflowWrap: "break-word",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  queryTxt: {
    color: "#064081",
    width: { xs: "90%", md: "80%", xl: "95%" },
    textAlign: "justify",
    wordSpacing: "1px",
    lineHeight: "25px",
    pt: 1,
    pl: 1,
  },
  arrowIcon: {
    cursor: "pointer",
    alignSelf: "flex-end",
    display: "flex",
    alignItem: "flex-start",
    pr: { xs: 2, md: 4 },
    color: `${theme.primary}`,
  },

  sendBtn: {
    textTransform: "capitalize",
    background: `${theme.primary}`,
    width: { xs: "100%", md: "30%", lg: "26%" },
    mt: 1,
    alignSelf: "flex-end",
    borderRadius: 5,
    "&:hover": {
      background: `${theme.primary}`,
      opacity: 0.8,
      display: "flex",
      alignItems: "flex-end",
    },
  },

  queryTitle: {
    display: "flex",
    justifyContent: { xs: "center", md: "space-between" },
    flexDirection: { xs: "column", md: "row" },
    alignItems: "center",
    background: `${theme.background}`,
    color: `${theme.queryTitleColor}`,
    width: "100%",
    height: "48px",
    pl: 2,
    mb: 2,
    borderRadius: 2,
  },

  queryTitleTxt: {
    width: { xs: "95%", md: "60%" },
    fontSize: { xs: "13px", sm: "13px", md: "15px" },
    height: "50px",
    display: "flex",
    alignItems: "center",
    overflowY: "auto",
    overflowX: "hidden",
    wordWrap: "break-word",
  },

  queryTitleDate: {
    width: { xs: "90%", md: "30%" },
    pr: 2,
    color: "#000000",
    display: "flex",
    alignItems: "center",
    pb: 0.5,
    fontSize: { xs: "10px", md: "12px" },
  },

  commentsContainer: {
    width: "100%",
    height: "5em",
    overflowY: "auto",
    overflowX: "hidden",
    mb: 1.5,
    textAlign: "justify",
  },
  commentHeader: {
    color: "#414042",
    fontSize: "13px",
    fontWeight: 500,
  },
  query: {
    color: "#414042",
    fontSize: "13px",
    fontFamily: "Poppins",
    pt: 0.5,
    pb: 1,
  },

  multiLineInput: {
    height: "auto",
    "& label.Mui-focused": {
      color: `${theme.inputTxt}`,
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 3,
      "& fieldset": {
        border: `2px solid ${theme.primary}`,
        borderRadius: "13px",
        color: `${theme.inputTxt}`,
      },
      "&.Mui-focused fieldset": {
        borderColor: `${theme.primary}`,
        color: "black",
      },
      "&:hover fieldset": {
        borderColor: `${theme.primary}`,
      },
      "& .Mui-hover": {
        borderColor: `${theme.primary}`,
      },
    },
  },
} satisfies Record<string, SxProps>;
