import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Box, Container, Paper, Grid, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import DataObjectIcon from '@mui/icons-material/DataObject';
import LanguageIcon from '@mui/icons-material/Language';
import PsychologyIcon from '@mui/icons-material/Psychology';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: <CodeIcon />,
      skills: ['Python', 'C/C++', 'Java', 'R', 'HDL']
    },
    {
      category: 'AI & ML Frameworks',
      icon: <PsychologyIcon />,
      skills: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP']
    },
    {
      category: 'Data & Analytics',
      icon: <StorageIcon />,
      skills: ['Power BI', 'Tableau', 'SQL', 'MongoDB', 'RDS', 'DynamoDB']
    },
    {
      category: 'Cloud Platforms',
      icon: <CloudIcon />,
      skills: ['AWS', 'Azure', 'GCP']
    },
    {
      category: 'Web Technologies',
      icon: <LanguageIcon />,
      skills: ['HTML', 'CSS', 'JS', 'PHP', 'ReactJS']
    },
    {
      category: 'Soft Skills',
      icon: <DataObjectIcon />,
      skills: ['Leadership', 'Team Management', 'Collaboration', 'Communication', 'Critical Thinking']
    },
    {
      category: 'Languages',
      icon: <LanguageIcon />,
      skills: ['Tamil', 'English', 'Hindi', 'Sanskrit']
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
          Skills & Expertise
        </Typography>

        <Grid container spacing={4}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} md={6} key={categoryIndex}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 4,
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
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ 
                      mr: 2, 
                      color: '#1a237e',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {category.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: '#1a237e' }}>
                      {category.category}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      >
                        <Chip
                          label={skill}
                          sx={{
                            background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                            color: 'white',
                            fontWeight: 500,
                            '&:hover': {
                              transform: 'scale(1.05)',
                              boxShadow: '0 4px 20px rgba(26, 35, 126, 0.2)'
                            },
                            transition: 'all 0.2s ease-in-out'
                          }}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Skills;
