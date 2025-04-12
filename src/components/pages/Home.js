import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Box, Container, Avatar, Stack, Link, Chip } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ pt: 15, minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Avatar
              sx={{
                width: 200,
                height: 200,
                margin: '0 auto',
                mb: 4,
                border: '4px solid #1a237e',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
              }}
              alt="Sudharshan Venkatraman"
              src="/path-to-your-photo.jpg"
            />
          </motion.div>
          <Typography variant="h2" component="h1" 
            sx={{ 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}>
            Sudharshan Venkatraman
          </Typography>
          <Typography variant="h4" sx={{ color: '#424242', mb: 4 }}>
            B.Tech. Computer Engineering (Data Science)
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 4 }}
          >
            <Chip
              icon={<PhoneIcon />}
              label="+91-7598942659"
              component={Link}
              href="tel:+917598942659"
              clickable
              sx={{ '&:hover': { transform: 'scale(1.05)' } }}
            />
            <Chip
              icon={<EmailIcon />}
              label="sudharshan24k@gmail.com"
              component={Link}
              href="mailto:sudharshan24k@gmail.com"
              clickable
              sx={{ '&:hover': { transform: 'scale(1.05)' } }}
            />
            <Chip
              icon={<LinkedInIcon />}
              label="sudh24k"
              component={Link}
              href="https://www.linkedin.com/in/sudh24k/"
              target="_blank"
              clickable
              sx={{ '&:hover': { transform: 'scale(1.05)' } }}
            />
            <Chip
              icon={<LocationOnIcon />}
              label="Vellore Institute of Technology, Vellore"
              sx={{ '&:hover': { transform: 'scale(1.05)' } }}
            />
          </Stack>

          <Typography variant="body1" sx={{ 
            color: '#616161', 
            maxWidth: '800px', 
            margin: '0 auto', 
            fontSize: '1.2rem', 
            lineHeight: 1.8,
            textAlign: 'justify'
          }}>
            Passionate about software development and machine learning, skilled in leveraging data-driven insights 
            for strategic decisions in cross-functional collaboration to convert analytical findings into impactful 
            business strategies, software engineering with AI to deliver innovative, scalable solutions.
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Home;
