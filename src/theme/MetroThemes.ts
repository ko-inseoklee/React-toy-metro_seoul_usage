import { extendTheme } from "@chakra-ui/react";

export const colors = {
    primary:{
        700: "#8D775F",
        500: "#D5BF86",
        200: "#F1F0CC"
    },
    error:{
        700: "#A71D31",
        900: "#3F0D12"
    }
}

const theme = extendTheme({
    colors: colors.primary,
    styles: {
        global: {
            body:{
                bg: colors.primary[500],
                height: "100%"
            },
            h1:{
                color: colors.primary[200]
            }
        }
    },
    fontSizes: {
        xs: "0.75rem",
        xl: "1.25rem",
    }
});

export default theme;