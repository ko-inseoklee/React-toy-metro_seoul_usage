import { extendTheme } from "@chakra-ui/react";

const colors = {
    primary:{
        700: "#34355B",
        600: "#4A4C82"
    }
}

const theme = extendTheme({
    colors: colors.primary,
    styles: {
        global: {
            body:{
                bg: "#DBDFAC",
                colors: colors.primary[600]
            },
            h1:{
                color: colors.primary[700]
            }
        }
    },
    textStyles:{
        
    }
});

export default theme;