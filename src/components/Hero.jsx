import { Box, Flex, useMediaQuery, Text, Icon, Spinner } from "@chakra-ui/react";
import React, { useState, useEffect, Suspense } from "react";
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { BiChevronDown } from 'react-icons/bi'

function actions(){
	const [index_actions, setIndexActions] = useState(0);
	const actionWords = ["design","build","develop"]
	useEffect(() => {
		const interval = setInterval(() => {
		  setIndexActions((index_actions + 1) % actionWords.length);
		}, 5000);
		
		return () => clearInterval(interval);
	  }, [index_actions]);

	return (
		<Flex fontSize={[24, null, 38]}>
			<Text>and I&thinsp;</Text>
			<motion.p
				animate={{ y: [-8, 0, 8] , opacity: [0, 1, 0]}}
				transition={{repeat: Infinity, duration: 5}}
			>
				<Text as="span"
				bgGradient="linear(to-r, sunglow, pumpkin)"
				bgClip='text'
				>
					{actionWords[index_actions]}
				</Text>
			</motion.p>
		</Flex>
	)
}

export default function Hero() {
	const handleClick = () => {
		const myDiv = document.getElementById('services');
		setTimeout(() => {
			myDiv.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
      			inline: 'nearest',
			});
		},0);
	};

	const HeroStyle = {
		pos: "absolute",
		bottom: "8rem",
		left: ["1rem", "3rem"],
		textColor: "white",
	}

  	return (
    	<Box id="/" pos="relative" height="100%">
			
			<Box borderRadius={12} height="100%"> 
				<Suspense fallback={<Box pt={["15rem", "30rem"]} ><Flex alignContent="center" justifyContent="center"><Spinner  size="xl" color='celest'/></Flex></Box>} >		
					<Spline scene="https://prod.spline.design/VzWk4CiSMXUqsDCv/scene.splinecode"/>
				</Suspense>
			</Box>
				
      		<Box sx={HeroStyle}>
			  	<Text fontSize={[26, null, 40]}>Hello, I'm Elliot</Text>
				{actions()}
				<Text fontSize={[24, null, 38]}>interactive web applications.</Text>
      		</Box>

			<Box position="absolute" bottom={{ base: "8", md: "12" }} width="full" display="flex" justifyContent="center" alignItems="center">
				
				<Box onClick={handleClick} cursor="pointer" width="35px" height="64px" borderColor="pumpkin" borderRadius="3xl" borderWidth="4px" display="flex" justifyContent="center" alignItems="start" p="2">
					<motion.div 
					animate={{ y: [-6, 12, -6] }} 
					transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }} >
					
					<Icon boxSize={8} color="pumpkin" as={BiChevronDown} />
					</motion.div>
				</Box>
				
			</Box>
			
    	</Box>
	
  );
}

