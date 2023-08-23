'use client';
import * as React from 'react';
import Link from 'next/link';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import Lottie from 'react-lottie-player';
import animationData from '@/assets/animation.json';

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 10,
  },
  avatr: {
    width: 56,
    height: 56,
    marginRight: 2,
  },
  title: {
    whiteSpace: 'nowrap',
  },
  subtitle: {
    paddingBottom: 2,
  },
};

export default function AboutPage() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box style={styles.header}>
            <Avatar
              alt="Frida"
              src="/static/images/frida1.jpg"
              sx={styles.avatr}
            />
            <Typography variant="h4" sx={styles.title}>
              Hi! I'm Frida
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={styles.subtitle}>
              I'm a cyber-security student and a design enthusiat (and I
              probably don't need to clarify I'm a cat person). My hobbies
              include getting way too many random tattoos and thrifting the
              lastetst fashion trends. I also really enjoy A24 films, coding
              music, weightlifitng and vegan cooking!
            </Typography>

            <Grid container rowGap={2}>
              <Grid item xs={12}>
                You can read my cv{' '}
                <Link
                  href="static/pdfs/mycv.pdf"
                  passHref
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  here
                </Link>{' '}
                and also check out some design experiences{' '}
                <Link
                  href="static/pdfs/mydesigns.pdf"
                  passHref
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  here
                </Link>
              </Grid>
              <Grid item xs={12}>
                You can listen to my favorite song at the moment{' '}
                <Link
                  href="https://youtu.be/q3lX2p_Uy9I"
                  passHref
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  here
                </Link>
              </Grid>
              <Grid item xs={12}>
                And you can check out my certificates on design, securirty and
                spoken languages on my LinkedIn{' '}
                <Link
                  href="https://www.linkedin.com/in/frida-ruiz-shimanovitch/"
                  passHref
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  here!
                </Link>
              </Grid>
              <Grid item xs={12}>
                Last but not least, you can find the repo for this project{' '}
                <Link
                  href="https://github.com/fridaruizs/react-mui-sb-example/tree/main/material-ui-nextjs-ts"
                  passHref
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  here
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" sx={styles.title}>
                  Thank you for your time and consideration :)
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: 425, height: 525 }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
