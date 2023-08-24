import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '16px',
    borderColor: 'primary.light',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    paddingBottom: '8px',
  },
};

const technologies = [
  {
    title: 'React',
    content:
      ' 5 years of building and designing user interfaces, both for web and mobile applications.',
  },
  {
    title: 'Angular',
    content:
      '2 years creating dynamic web applications. Developing logistics and internal products.',
  },
  {
    title: 'Node.js',
    content:
      '3 years  in server-side JavaScript development using Node.js, building scalable and efficient backend systems.',
  },
  /* {
    title: '.NET',
    content:
      '2 years skilled in developing and testing logistics and internal products using C# for the backend.',
  }, */
  {
    title: 'SQL (MSSQL, PostgreSQL, MongoDB)',
    content:
      '3 years of experience in database management, designing and optimizing queries for data retrieval and storage, writing complex store procedures and ensuring data integrity. NoSQL data storage, including schema design and data manipulation',
  },
  {
    title: 'Figma & Design (Illustrator and Branding)',
    content:
      '3-4 years of experience in using Figma for UI/UX design and collaboration, creating interactive prototypes and design assets. Graphic design using Illustrator, specializing in branding and visual identity development.',
  },
  {
    title: 'HTML/WordPress/CSS',
    content:
      '5 years of experience in creating responsive web layouts using HTML, customizing and developing themes on WordPress, and styling with CSS. As well as deploying and administrating via Bitbucket, Jira, Azure.',
  },
];

export default function StackPage() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        My favorite and most used technologies
      </Typography>
      <Grid container spacing={3}>
        {technologies.map((tech) => (
          <Grid item xs={12} sm={6} md={4} key={tech.title}>
            <Box sx={styles.container}>
              <Typography variant="h6" sx={styles.title}>
                {tech.title}
              </Typography>
              <Typography variant="body1">{tech.content}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
