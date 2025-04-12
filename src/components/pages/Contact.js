import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Box, Container, Paper, IconButton, Grid } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  const contactInfo = {
    email: 'your.email@example.com',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourhandle'
  };

  return (
    <Container maxWidth="lg" sx={{ pt: 15, pb: 8, minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h3" 
          sx={{ 
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
            background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
          Get in Touch
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              sx={{ 
                p: 6,
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(26, 35, 126, 0.1)',
                borderRadius: 2
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Typography variant="h5" sx={{ mb: 4, color: '#1a237e' }}>
                  Let's Connect
                </Typography>
                
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', color: '#616161' }}>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 4 }}>
                  <motion.div whileHover={{ y: -5 }}>
                    <IconButton 
                      href={`mailto:${contactInfo.email}`}
                      sx={{ 
                        color: '#1a237e',
                        background: 'rgba(26, 35, 126, 0.1)',
                        p: 2,
                        '&:hover': { background: 'rgba(26, 35, 126, 0.2)' }
                      }}
                    >
                      <EmailIcon fontSize="large" />
                    </IconButton>
                  </motion.div>
                  
                  <motion.div whileHover={{ y: -5 }}>
                    <IconButton 
                      href={contactInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        color: '#1a237e',
                        background: 'rgba(26, 35, 126, 0.1)',
                        p: 2,
                        '&:hover': { background: 'rgba(26, 35, 126, 0.2)' }
                      }}
                    >
                      <LinkedInIcon fontSize="large" />
                    </IconButton>
                  </motion.div>
                  
                  <motion.div whileHover={{ y: -5 }}>
                    <IconButton 
                      href={contactInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        color: '#1a237e',
                        background: 'rgba(26, 35, 126, 0.1)',
                        p: 2,
                        '&:hover': { background: 'rgba(26, 35, 126, 0.2)' }
                      }}
                    >
                      <GitHubIcon fontSize="large" />
                    </IconButton>
                  </motion.div>
                  
                  <motion.div whileHover={{ y: -5 }}>
                    <IconButton 
                      href={contactInfo.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        color: '#1a237e',
                        background: 'rgba(26, 35, 126, 0.1)',
                        p: 2,
                        '&:hover': { background: 'rgba(26, 35, 126, 0.2)' }
                      }}
                    >
                      <TwitterIcon fontSize="large" />
                    </IconButton>
                  </motion.div>
                </Box>

                <Typography variant="body1" sx={{ color: '#616161' }}>
                  Email: {contactInfo.email}
                </Typography>
              </motion.div>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Contact;
