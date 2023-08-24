import { createTheme, Theme, PaletteMode } from '@mui/material';
import React, { ReactNode, createContext, useContext, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';

type ColorMode = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleColorMode: () => void;
  colorMode: ColorMode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

export const _ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [colorMode, setColorMode] = React.useState<ColorMode>('light');

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => {
    const designTokens = getDesignTokens(colorMode);
    return createTheme(designTokens);
  }, [colorMode]);

  const contextValue = {
    theme,
    toggleColorMode,
    colorMode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
        <ThemeProvider theme={theme}>
      {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'dark'
          ? {
              primary: {
                main: '#433089',
                light: '120422',
                dark: '#EBB1C4',
                contrastText: '#CB6486',
              },
              divider: '#433089',
              text: {
                primary: '#EBB1C4',
                secondary: '#CB6486',
              },
            }
          : {
            primary: {
              main: '#ec407a',
              light: '#F78DB0',
              dark: '#19161D',
              contrastText: '#332473',
            },
            divider: '#F78DB0',
            text: {
              primary: '#19161D',
              secondary: '#332473',
            },
            }),
      },
});

export default _ThemeProvider;
