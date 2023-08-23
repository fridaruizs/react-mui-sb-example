import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


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

export default function StackPage() {
    const technologies = [
        'React',
        'Angular',
        'Node.js',
        '.NET',
        // Add more technologies
      ];
    
      return (
        <Box p={3}>
          <Typography variant="h4" gutterBottom>
            My Favorite and Most Used Technologies
          </Typography>
          <Grid container spacing={3}>
            {technologies.map((tech) => (
              <Grid item xs={6} sm={4} md={3} key={tech}>
                <Box
                  border="1px solid #ccc"
                  borderRadius={4}
                  p={2}
                  textAlign="center"
                >
                  {tech}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    };
