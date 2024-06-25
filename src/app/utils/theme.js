'use client'
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#14B49C',
        // light: will be calculated from palette.primary.main,
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      blue: {
        main: '#0B3650',        
      },
      background: {
        main: '#EFFFFC',
      }
    },
    typography: { 
      h2: {             
        letterSpacing: "-0.03125rem",
      },
      h4: {
        fontWeight: 500,
        letterSpacing: "0.015625em",
      },
      h6: {
        letterSpacing: "0.009375em",
      },
      subtitle2: {
        letterSpacing: "0.00625em",
      },
      caption: {
        letterSpacing: "0.025em",
      },      
    },    
  });