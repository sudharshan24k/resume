import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/experience', label: 'Experience' },
    { path: '/education', label: 'Education' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <AppBar position="fixed" sx={{ background: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', gap: 2, margin: '0 auto' }}>
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                component={Link}
                to={item.path}
                sx={{
                  color: location.pathname === item.path ? '#1a237e' : '#424242',
                  fontWeight: location.pathname === item.path ? 700 : 400,
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': {
                    color: '#1a237e',
                  },
                }}
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
