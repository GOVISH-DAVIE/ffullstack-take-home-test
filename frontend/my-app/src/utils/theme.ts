import { createTheme } from '@mui/material/styles'; 


import "@fontsource/mulish";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/400-italic.css"; 

export const mainTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          
          "&:hover": {
            background: "transparent",
            color: '#82A3A1'
          }
        }
      }
    }
  },


  typography: {
    fontFamily: 'Mulish',
    body2: {
      fontWeight: 400,
    },
    h2:{

      color:"#335C6E",
    },
    h1:{

      color:"#335C6E",
    },
    h3:{

      color:"#335C6E",
    },
    h4:{

      color:"#335C6E",
    },
    h5:{

      color:"#335C6E",
    },
    h6:{

      color:"#335C6E",

      fontWeight: 500,
    },
    body1: {
      fontWeight: 300,
      color:"#8C8C8C",
      fontSize: 13
    },

    caption: {
      fontSize: 16,
      color: '#727580'
    },
    allVariants: {
      fontFamily: 'Mulish',
    },


  },
  
  palette: {
    primary: {
      main: "#5ACCCC",
      light: '#CFFAFA',
      dark: '#53C2C2',
      contrastText: '#28B8B8'

    },
    secondary: {
      main: "#fff",
      light: '#335C6E60', 
    },
    warning: {
      main: "#FABD33",
      light: '#FAAD00', 
    },
    error: {
      main: "#F76434",
      light: '#FFE6DC', 
    }
    ,
    success: {
      main: "#4AA08", 
    }
    ,
    info: {
      main: "#335C6E", 
      dark: "#727580", 
    },

    // info:
  },

});

export default mainTheme;


