import { Button } from "@mui/material";

import { btnStyles } from "./styles";

const LoginButton = () => {
  return (
    <Button variant="contained" type="submit" sx={btnStyles.btn}>
      Login
    </Button>
  );
};

export default LoginButton;
