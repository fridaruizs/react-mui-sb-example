'use client';
import * as React from 'react';
import Link from 'next/link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  { text: 'Home', href: '/' },
  { text: 'About the dev', href: '/about' },
];

const styles = {
  drawer: {
    textAlign: 'center',
    backgroundColor: 'primary.light',
  },
  container: {
    display: 'flex',
  },
  iconButton: {
    mr: 2,
    display: { sm: 'none' },
  },
  title: {
    flexGrow: 1,
    display: { xs: 'none', sm: 'block' },
  },
  mobileContainer: {
    display: { xs: 'none', sm: 'block' },
  },
  menuButton: {
    color: 'primary.dark',
  },
  mobileDrawer: {
    display: { xs: 'block', sm: 'none' },
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      width: drawerWidth,
      backgroundColor: 'primary.light',
    },
  },
  appBar: {
    backgroundColor: 'primary.light',
    color: 'primary.dark',
  },
  mobileTitle: {
    my: 2,
    color: 'primary.dark',
  },
};

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={styles.drawer}>
      <Typography variant="h6" sx={styles.mobileTitle}>
        React, Next and MUI cat web with Storybook ♥️
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ text, href }) => (
          <ListItem key={href} disablePadding>
            <ListItemButton component={Link} href={href} sx={styles.drawer}>
              <ListItemText primary={text} sx={styles.appBar} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={styles.container}>
      <AppBar component="nav" sx={styles.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={styles.iconButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={styles.title}>
            React, Next and MUI cat web with Storybook ♥️
          </Typography>
          <Box sx={styles.mobileContainer}>
            {navItems.map(({ text, href }) => (
              <Button key={href} href={href} sx={styles.menuButton}>
                {text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={styles.appBar}>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={styles.mobileDrawer}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
