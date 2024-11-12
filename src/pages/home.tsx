import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, Box, Heading, Button,Grid } from "@chakra-ui/react";
import Sidebars from '../sections/sidebar';
import '../Styles/home.css'
import Topbar from '../sections/topbar';

const Home: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/home');
    } else {
      navigate('/');
    }
  }, [navigate]);

  const cardData = [
    {
      variant: "subtle",
      title: "Courses",
      button: 'View courses'
    },
    {
      variant: "outline",
      title: "Kids",
        button: 'Kids'
    },
    {
      variant: "elevated",
      title: "Add Kid",
        button: 'Enroll kid'
    },
    {
      variant: "elevated",
      title: "Tutors",
        button: 'Tutors'
    },
    {
      variant: "elevated",
      title: "Add Tutor",
        button: 'Enroll Tutor'
    },
    {
      variant: "elevated",
      title: "Marketing",
        button: 'Marketing'
    },
    {
      variant: "elevated",
      title: "Drive",
        button: 'Courses Drive'
    }
  ]
  return (
  <>
    <Topbar/>
    <div className='all'>
      <Sidebars />
      <div className="grid">
        <h1>Home</h1>
        <div className="boxes">
        <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4}>
          {cardData.map((card, index) => (
            <Box
              key={index}
              width="25rem"
              height="20.5rem"
              borderRadius="md"
              boxShadow="lg"
              p={5}
              background="#1D3A4C"
              color="white"
            >
              <Stack>
                <img src="./src/assets/Vector.png" style={{ width: '3rem' }} />
                <Heading textAlign="left" fontSize="xx-large" fontWeight='bold' pb={4}>
                  {card.title}
                </Heading>
                <Button
                  variant="outline"
                  backgroundColor="#E2DDBF"
                  color="#4C847B"
                  fontSize="larger"
                  width="13rem"
                  padding='1.5rem'
                  fontWeight='bold'
                >
                  <i className="fa-solid fa-up-right-from-square"></i>
                  {card.button}
                </Button>
                <img
                  src="./src/assets/Vector 2.png"
                  style={{ width: '20rem', marginLeft: '4rem', marginTop: '-4.3rem' }}
                />
              </Stack>
            </Box>
          ))}
        </Grid>
        </div>
      </div>
    </div>
    </>
  );
  
};

export default Home;

