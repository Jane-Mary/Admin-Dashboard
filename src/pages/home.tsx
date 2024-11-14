import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, Box, Heading, Button,Grid } from "@chakra-ui/react";
import '../Styles/home.css'

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
    <div className='all'>
      <div className="grid">
        <h1>Home</h1>
        <div className="boxes">
        <Grid templateColumns="repeat(3, 1fr)" gap={8} p={4}>
          {cardData.map((card, index) => (
            <Box
              key={index}
              width="100%"
              height="100%"
              borderRadius="md"
              boxShadow="lg"
              padding = "1rem 0 0 1rem"
              background="#1D3A4C"
              color="white"
            >
              <Stack>
                <img src="./src/assets/Vector.png" style={{ width: '10%',paddingTop:'1rem'}} />
                <Heading textAlign="left" fontSize="xxx-large" fontWeight='bolder' paddingTop='1rem' pb={4}>
                  {card.title}
                </Heading>
                <Button
                  variant="outline"
                  backgroundColor="#E2DDBF"
                  color="#4C847B"
                  fontSize="x-large"
                  width="60%"
                  padding='1.5rem'
                  fontWeight='bold'
                  marginTop= "1rem"
                >
                  <i className="fa-solid fa-up-right-from-square"></i>
                  {card.button}
                </Button>
                <img
                  src="./src/assets/Vector 2.png"
                  style={{ width: 'inherit', marginLeft: '4rem', marginTop: '-6rem' }}
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

