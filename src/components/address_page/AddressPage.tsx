import {
  MyLocation,
  List,
  ArrowCircleLeftOutlined,
} from "@mui/icons-material/";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Container,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styles } from "./styles";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "*Name must be at least 6 characters")
    .max(20, "*Name is too long!")
    .required("*Name is required"),
  mobile: Yup.string()
    .matches(/\d{10}$/, "Invalid Mobile Number!")
    .required("*Phone Number is required"),
  pincode: Yup.string()
    .min(6, "Enter a valid pincode")
    .required("*Pincode is required"),
  state: Yup.string().required("*State is required"),
  city: Yup.string().required("*City is required"),
  house: Yup.string().required("*House/building Name is required"),
  street: Yup.string().required("*Street is required"),
  area: Yup.string().required("*Area is required"),
  landMark: Yup.string().required("*Landmark is required"),
});
const AddressPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pincode: "",
    state: "",
    city: "",
    house: "",
    street: "",
    area: "",
    landMark: "",
  });

  const handlerGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
      });
    }
  };

  return (
    <Box sx={styles.root}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent={"space-between"}
        gap={2}
        sx={{ ...styles.header, ...styles.stack }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={1}
          sx={styles.headerFirstChild}
        >
          <List sx={styles.listIcon} /> <Box sx={styles.addresTxt}>Address</Box>
          <ArrowCircleLeftOutlined sx={styles.leftArrowIcon} />
          <Box sx={styles.newAddrTxt}>Add New Address</Box>
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={2}
          sx={styles.headerSecondChild}
          onClick={handlerGeoLocation}
        >
          <MyLocation sx={styles.locationIcon} />{" "}
          <Box sx={styles.locationTxt}>Use my location </Box>
        </Stack>
      </Stack>
      <Formik
        initialValues={{
          name: "",
          mobile: "",
          pincode: "",
          state: "",
          city: "",
          house: "",
          street: "",
          area: "",
          landMark: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          setFormData(values);
          handleOpen();
        }}
      >
        {(props) => (
          <Box
            component={"form"}
            onSubmit={props.handleSubmit}
            sx={styles.FormContainer}
          >
            <Container maxWidth={"xl"}>
              <Grid
                container
                sx={styles.inputContainer}
                spacing={2}
                rowSpacing={2}
              >
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Full Name"
                    type="text"
                    name="name"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    onFocus={props.handleBlur}
                    error={props.touched.name && Boolean(props.errors.name)}
                    helperText={props.touched.name && props.errors.name}
                    value={props.values.name}
                    sx={styles.input}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    type="text"
                    name="mobile"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    onFocus={props.handleBlur}
                    value={props.values.mobile}
                    error={props.touched.mobile && Boolean(props.errors.mobile)}
                    helperText={props.touched.mobile && props.errors.mobile}
                    sx={styles.input}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Pincode"
                    variant="outlined"
                    type="text"
                    name="pincode"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    onFocus={props.handleBlur}
                    value={props.values.pincode}
                    error={
                      props.touched.pincode && Boolean(props.errors.pincode)
                    }
                    helperText={props.touched.pincode && props.errors.pincode}
                    sx={styles.input}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    id="outlined-basic"
                    label="State"
                    variant="outlined"
                    type="state"
                    name="state"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    onFocus={props.handleBlur}
                    value={props.values.state}
                    error={props.touched.state && Boolean(props.errors.state)}
                    helperText={props.touched.state && props.errors.state}
                    sx={styles.input}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    type="City"
                    name="city"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    onFocus={props.handleBlur}
                    value={props.values.city}
                    error={props.touched.city && Boolean(props.errors.city)}
                    helperText={props.touched.city && props.errors.city}
                    sx={styles.input}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <TextField
                    id="outlined-basic"
                    label="House/building  Name"
                    variant="outlined"
                    type="text"
                    name="house"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    onFocus={props.handleBlur}
                    value={props.values.house}
                    error={props.touched.house && Boolean(props.errors.house)}
                    helperText={props.touched.house && props.errors.house}
                    sx={styles.input}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <TextField
                    id="outlined-basic"
                    label="Street"
                    variant="outlined"
                    type="text"
                    name="street"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    onFocus={props.handleBlur}
                    value={props.values.street}
                    error={props.touched.street && Boolean(props.errors.street)}
                    helperText={props.touched.street && props.errors.street}
                    sx={styles.input}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                  <TextField
                    id="outlined-basic"
                    label="Area"
                    variant="outlined"
                    type="text"
                    name="area"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    onFocus={props.handleBlur}
                    value={props.values.area}
                    error={props.touched.area && Boolean(props.errors.area)}
                    helperText={props.touched.area && props.errors.area}
                    sx={styles.input}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <TextField
                    id="outlined-basic"
                    label="Near By Landmark"
                    variant="outlined"
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    onFocus={props.handleBlur}
                    value={props.values.landMark}
                    error={
                      props.touched.landMark && Boolean(props.errors.landMark)
                    }
                    helperText={props.touched.landMark && props.errors.landMark}
                    name="landMark"
                    sx={styles.input}
                  />
                </Grid>
              </Grid>
            </Container>
            <Stack direction={"row"} gap={2}>
              <Button
                variant="outlined"
                sx={styles.Cancelbtn}
                onClick={props.handleReset}
              >
                Cancel
              </Button>
              <Button variant="contained" sx={styles.Savebtn} type="submit">
                Save
              </Button>
            </Stack>
          </Box>
        )}
      </Formik>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={style.userDetails}>User Details</Typography>
          <Stack gap={1}>
            <Stack direction={"row"} justifyContent={"space-between"} gap={1}>
              <Typography>FullName</Typography>
              <Typography>{formData.name}</Typography>
            </Stack>

            <Stack direction={"row"} justifyContent={"space-between"} gap={1}>
              <Typography>Mobile Number</Typography>
              <Typography>{formData.mobile}</Typography>
            </Stack>

            <Stack direction={"row"} justifyContent={"space-between"} gap={1}>
              <Typography>Pincode</Typography>
              <Typography>{formData.pincode}</Typography>
            </Stack>

            <Stack direction={"row"} justifyContent={"space-between"} gap={1}>
              <Typography>State</Typography>
              <Typography>{formData.state}</Typography>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"} gap={1}>
              <Typography>City</Typography>
              <Typography>{formData.city}</Typography>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddressPage;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: 200, sm: 300, md: 400 },
  bgcolor: "background.paper",
  border: "2px solid green",
  boxShadow: 24,
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  p: 4,
  userDetails: {
    alignSelf: "center",
  },
};
