import { Box, Text, Heading, SimpleGrid, Icon } from "@chakra-ui/react";
import { Outlet, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation, AnimatePresence, motion } from 'framer-motion';
import SvgRocket from "./svg/SvgRocket";
import SvgAi from "./svg/SvgAi";
import SvgContact from "./svg/SvgContact";

export default function ContentCards () {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

    window.onload = function(){
        document.getElementById("cards").onmousemove = e => {
        for(const card of document.getElementsByClassName("card")) {
          const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;
      
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        };
      }
    }

    const handleClick = () => {
      const myDiv = document.getElementById('page');
        setTimeout(() => {
          myDiv.scrollIntoView({
            behavior: 'smooth'
          });
        }, 200);
    };

  return (
    <Box >
      <Box id="header" textColor="white" >
        <Box height="1px"> </Box>
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0.5 }}
          animate={controls}
        >
        <Box mx={[6, 12 ,24]} mt={14}>
          <Heading 
          pb="1rem"  
          _before={{
            content: '""',
            width:"100px",
            height:"8px",
            borderColor:"sunglow", 
            borderRadius:"3xl",
            borderWidth:"4px", 
            display:"flex",
            
            }}> EXPLORE </Heading>
          <Text maxW="40rem" fontSize={[18, null, 22]}> Discover the different aspects 
          of my past and current experiences as a developer. This includes work history and
          web technologies I have become skilled in utilizing.
          </Text>
        </Box>
        </motion.div>
        
    </Box>

      <Box >
      <Box id="page" height={1}></Box>
      
      <AnimatePresence mode='wait'>

        <Box mx={[6, 22 , 36, null, null, 80]}  >
          <Outlet />
        </Box>

      </AnimatePresence>

      <SimpleGrid onClick={handleClick} textColor="white"  id="cards"  columns={[1, null, 3]} mx={[6, 12 , 22, null, null, 60]} spacing={4}>

        <Link to="work">
            <Box display="flex" alignItems="center" className="card" height={[48, null , 80]}>
              <Icon as={SvgRocket} width="100%" height="80%" />
              <Box className="card-content">
                <Heading m={2} size="lg" >WORK</Heading>
              </Box>
            </Box>
        </Link>
        <Link to="skills">
            <Box display="flex" alignItems="center" className="card" height={[48, null , 80]}>
              <Icon mt={8} as={SvgAi} width="100%" height="70%"/>
              <Box className="card-content">
                <Heading m={2} size="lg">SKILLS</Heading>
              </Box>
            </Box>
        </Link>
        <Link to="contact">
            <Box display="flex" alignItems="center" className="card" height={[48, null , 80]}>
              <Icon  mt={8} as={SvgContact} width="100%" height="60%"/>
              <Box className="card-content">
                <Heading m={2} size="lg">CONTACT</Heading>
              </Box>
            </Box>
        </Link>
        
      </SimpleGrid>
      </Box>

    </Box>
  )
}

