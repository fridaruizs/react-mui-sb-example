import * as React from 'react';

import Box from '@mui/material/Box';

import ThemeRegistry from '@/styles/ThemeRegistry';
import Header from '@/components/molecules/Header';

export const metadata = {
  title: 'Simpe cat app',
  description: 'Example made by Frida Ruiz',
};

const styles = {
  main: {
    flexGrow: 1,
    bgcolor: 'background.default',
    marginTop: ['48px', '56px', '64px'],
    padding: 3,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          <Box
            component="main"
            sx={styles.main}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
