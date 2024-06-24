'use client'
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
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