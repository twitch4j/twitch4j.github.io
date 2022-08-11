import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { PaletteMode } from '@mui/material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function getDocusaurusColorMode() {
  let colorMode = 'dark'
  const htmlElement = document.getElementsByTagName('html')[0];
  if (htmlElement !== undefined) {
    colorMode = htmlElement.getAttribute('data-theme') as string
  }

  return colorMode;
}

export default function App(props: any): JSX.Element {
  const [mode, setMode] = React.useState<PaletteMode>('dark');

  // keep colorMode syncronized with docusaurus
  useEffect(() => {
    const interval = setInterval(() => {
      const newMode = getDocusaurusColorMode() == 'dark' ? 'dark' : 'light'
      setMode(newMode)
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const theme = createTheme({
    palette: {
      mode: mode
    },
  });
  return <React.Fragment>
      <ColorModeContext.Provider value={mode}>
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </React.Fragment>;
}
