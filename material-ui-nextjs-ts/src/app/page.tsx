import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import MediaCard from '@/components/molecules/MediaCard';

export default function HomePage() {
  const styles = {
    container: {
      display: 'flex',
    },
  };

  const onThemeChange = () => {};

  return (
    <Box sx={styles.container}>
      <Box>
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid xs={12} md={6}>
            <MediaCard
              heading="Try my dark mode"
              text="Colors are a big part of the design process in my opinion, I like taking my time figuring out what's the best look for a product and what message am I trying to send to an audience."
              main={{
                text: 'Click here to change the theme',
                onclick: onThemeChange(),
              }}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <MediaCard
              heading="Storybook plug-in"
              text="Want to see components specifically, run the storybook command and click below to access my component stories."
              main={{ text: 'I wanna see!', href: '/stack' }}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <MediaCard
              heading="Want to play a game?"
              text="I like exploring my limits with code, finding and creating cool stuff (even if I never get to publish them) and I'm always down for a challenge: So here's a little react tic tac toe for you (PS: It's a two player game, this project is too small for an ai algorithm, or is it?)."
              main={{ text: 'I want to play!', href: '/tictactoe' }}
            />
          </Grid>
          <Grid xs={12} md={6}>
            <MediaCard
              heading="My favorite stack VS my most recent"
              text="Here you can see what I'm specialized in as well as what I've been recently working on. I got to try out a lot of different frameworks and tech.I love talking about new discoveries in the IT world and learning new things."
              main={{ text: 'Let´s read..', href: '/stack' }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
