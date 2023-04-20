import { Box, Flex, Image, Text, Heading, SimpleGrid } from "@chakra-ui/react";
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const services = [
  {
    title: "UX/UI Designer",
    icon: "/icons/ux.png"
  },
  {
    title: "Web Developer",
    icon: "/icons/dev.png"
  },
  {
    title: "Project Manager",
    icon: "/icons/manage.png"
  },
  {
    title: "3D Modeler",
    icon: "/icons/3D.png"
  }
]

const ServiceCard = ({ title, icon}) => {

  return(
    <Tilt>
      <Box bg="indigo" textColor="white" pos="relative" borderRadius={12} height={[44, 52 , 72]} 

      _before={{
        content: "''",
        position: "absolute",
        top: "-5px",
        right: "-5px",
        bottom: "-5px",
        left: "-5px",
        border: "2px solid",
        borderColor: "transparent",
        bgGradient: "linear(to-br, sunglow, pumpkin)",
        backgroundClip: "padding-box",
        borderRadius: "12",
        zIndex:"-1"}}>
        <Flex alignItems="center" justifyContent="center" >
          <Image 
            boxSize={[32, 40 , 52]}
            objectFit='fit'
            src={icon}
            alt={title}
          />
        </Flex>
        <Flex justifyContent="center">
          <Text fontSize={[16, 20, 24]}>{title}</Text>
        </Flex>
      </Box>
    </Tilt>

  )
}

export default function SubHero(){
  const controlsHeading = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controlsHeading.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  }, [controlsHeading, inView]);
  
  return (
    <Box id="services">
      
    <Box textColor="white" >
        <Box height="1px"> </Box>
        <motion.div
          ref={ref}
          initial={{ x: -100, opacity: 0 }}
          animate={controlsHeading}
        >
        <Box mx={[6, 12 ,24]} mt={28}>
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
            
            }}> SERVICES </Heading>
          <Text maxW="40rem" fontSize={[18, null, 22]}> I deliver multiple web services for any kind of project. 
          With abilities to transform a vision into a fully functional and aesthetically 
          pleasing website that achieves business goals.
          </Text>
        </Box>
        </motion.div>
        
    </Box>
    <Box my={12} >
      <SimpleGrid columns={[2, null, 4]} spacing={[4, 6, 8]} mx={[6, 12 ,24]} >
        
          {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
       
      </SimpleGrid>
      </Box>
    </Box>
  )
}
