import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Box, Container, Card, CardContent, CardMedia, Grid, Chip, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      title: 'Project Name 1',
      description: 'A comprehensive project showcasing advanced features and modern technologies.',
      image: '/path-to-project1-image.jpg',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1-demo.com'
    },
    // Add more projects as needed
  ];

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
          Featured Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(26, 35, 126, 0.1)',
                    borderRadius: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)'
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 2 }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: '#616161' }}>
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {project.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          sx={{
                            background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                            color: 'white',
                          }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <IconButton 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          color: '#1a237e',
                          '&:hover': { transform: 'scale(1.1)' }
                        }}
                      >
                        <GitHubIcon />
                      </IconButton>
                      <IconButton 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          color: '#1a237e',
                          '&:hover': { transform: 'scale(1.1)' }
                        }}
                      >
                        <LaunchIcon />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Projects;
