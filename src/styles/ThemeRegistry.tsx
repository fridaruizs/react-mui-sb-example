'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';

import _ThemeProvider from '@/contexts/ThemeContext';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
        <_ThemeProvider>
          <CssBaseline />
          {children}
        </_ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
