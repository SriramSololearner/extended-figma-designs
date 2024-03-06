import { theme } from "../../../theme/config.theme"

export const btnStyles = {
    btn: {
        width: { xs: "95%", sm: "100%", md: "10.5em" },
        height: { xs: "50px" },
        fontWeight: "600",
        borderRadius: "60px",
        background: `${theme.primary}`,
        "&:hover": {
            background: `${theme.primary}`,
        }

    }
}