import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiSnackbar: {
            variants: [
                {
                    props: { variant: "success" },
                    style: {
                        "& .MuiSnackbarContent-root": {
                            background: "green"
                        }
                    }
                },
                {
                    props: { variant: "error" },
                    style: {
                        "& .MuiSnackbarContent-root": {
                            background: "red",
                            width: "100%",
                            height: "4.5em"
                        }
                    }
                }
            ]
        }
    }
});