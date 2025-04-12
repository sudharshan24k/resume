import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Box, Container, Card, CardContent, Grid } from '@mui/material';
import ScienceIcon from '@mui/icons-material/Science';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

const Experience = () => {
  const researchExperience = [
    {
      title: 'Intent Estimation of VRU\'s in Autonomous Vehicles',
      description: 'Research focused on advanced methodologies for understanding and predicting Vulnerable Road Users\'s behavior in autonomous driving scenarios.',
      icon: <ScienceIcon />
    },
    {
      title: 'Natural Language Processing with Sanskrit',
      description: 'Exploring novel approaches and applications in NLP using Sanskrit as a base language, contributing to computational linguistics.',
      icon: <ScienceIcon />
    },
    {
      title: 'Deep Learning Architecture Design',
      description: 'Designing new Deep Learning architectures for domain-specific requirements to optimize performance and efficiency.',
      icon: <ScienceIcon />
    }
  ];

  const projects = [
    {
      title: 'Indian Medicinal Plants Identification',
      description: 'Spearheaded the development of advanced neural network models for the precise identification of Indian medicinal plants by their vernacular names.',
      icon: <AccountTreeIcon />
    },
    {
      title: 'AI-Driven Mental Health Support',
      description: 'Engineered an AI-driven mental health support mechanism utilizing state-of-the-art transformer models for personal psychological needs.',
      icon: <AccountTreeIcon />
    },
    {
      title: 'Full-Stack Alumni Portal',
      description: 'Single-handedly overseeing the real-time development and ongoing maintenance of a full-stack alumni portal and school website.',
      icon: <AccountTreeIcon />
    }
  ];

  const conferences = [
    {
      title: 'International Conference on Emerging Innovations for Sustainable Agriculture',
      achievement: 'Best Paper Award for pioneering a real-time application through innovative research and the development of a novel deep learning architecture.',
      icon: <WorkspacePremiumIcon />
    },
    {
      title: 'International Conference on Emerging Trends in Engineering Science and Technology',
      icon: <WorkspacePremiumIcon />
    },
    {
      title: 'International Conference on Advancements in AI Technologies',
      icon: <WorkspacePremiumIcon />
    },
    {
      title: 'Book Chapter Publication',
      description: 'Artificial Intelligence and Disaster Preparedness: Enhancing Early Warning Systems',
      icon: <WorkspacePremiumIcon />
    }
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
          Research & Projects
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" 
              sx={{ 
                mb: 4,
                fontWeight: 600,
                color: '#1a237e'
              }}>
              Research Experience
            </Typography>
            <Grid container spacing={3}>
              {researchExperience.map((exp, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card 
                      elevation={0}
                      sx={{ 
                        height: '100%',
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
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Box sx={{ color: '#1a237e', mr: 2 }}>{exp.icon}</Box>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {exp.title}
                          </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ color: '#616161' }}>
                          {exp.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4" 
              sx={{ 
                mb: 4,
                fontWeight: 600,
                color: '#1a237e'
              }}>
              Notable Projects
            </Typography>
            <Grid container spacing={3}>
              {projects.map((project, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Card 
                      elevation={0}
                      sx={{ 
                        height: '100%',
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
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Box sx={{ color: '#1a237e', mr: 2 }}>{project.icon}</Box>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {project.title}
                          </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ color: '#616161' }}>
                          {project.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4" 
              sx={{ 
                mb: 4,
                fontWeight: 600,
                color: '#1a237e'
              }}>
              Conferences & Publications
            </Typography>
            <Grid container spacing={3}>
              {conferences.map((conf, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <Card 
                      elevation={0}
                      sx={{ 
                        height: '100%',
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
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Box sx={{ color: '#1a237e', mr: 2 }}>{conf.icon}</Box>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {conf.title}
                          </Typography>
                        </Box>
                        {conf.description && (
                          <Typography variant="body1" sx={{ color: '#616161', mb: conf.achievement ? 2 : 0 }}>
                            {conf.description}
                          </Typography>
                        )}
                        {conf.achievement && (
                          <Typography 
                            variant="body1" 
                            sx={{ 
                              color: '#1a237e',
                              fontWeight: 500,
                              fontStyle: 'italic'
                            }}
                          >
                            {conf.achievement}
                          </Typography>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Experience;
