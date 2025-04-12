import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Box, Container, Card, CardContent, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech. in Computer Engineering (Data Science)',
      school: 'VIT, Vellore',
      period: 'Aug 2022 - Aug 2026',
      grade: '9.20 CGPA'
    },
    {
      degree: 'Senior Secondary and Secondary',
      school: 'Sri Vignesh Vidyalaya, CBSE',
      period: 'Jun 2014 - May 2022',
      grade: '93% and 94%'
    }
  ];

  const certifications = [
    'Google Data Analytics - Google (94%)',
    'AWS Machine Learning',
    'AWS Cloud Practitioner',
    'Microsoft Azure AI-900 (95%)',
    'NPTEL: Data Mining (82%)',
    'Prompt Engineering - DeepLearning.AI',
    'Mathematics for Machine Learning - Scaler',
    'AWS: The Elements of Data Science'
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
          Education & Certifications
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
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
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <SchoolIcon sx={{ color: '#1a237e', mr: 2 }} />
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                          {edu.degree}
                        </Typography>
                      </Box>
                      <Typography variant="h6" sx={{ color: '#424242', mb: 1 }}>
                        {edu.school}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: '#616161', mb: 1 }}>
                        {edu.period}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: '#1a237e', fontWeight: 600 }}>
                        {edu.grade}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card
                elevation={0}
                sx={{ 
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(26, 35, 126, 0.1)',
                  borderRadius: 2
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, color: '#1a237e' }}>
                    Certifications
                  </Typography>
                  <Box component="ul" sx={{ m: 0, pl: 3 }}>
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + (index * 0.1) }}
                      >
                        <Typography 
                          component="li" 
                          sx={{ 
                            mb: 2,
                            '&::marker': {
                              color: '#1a237e'
                            }
                          }}
                        >
                          {cert}
                        </Typography>
                      </motion.div>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Education;
