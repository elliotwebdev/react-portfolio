import { Box, Flex, useMediaQuery, Text, useInterval, Image, Icon, Spinner } from "@chakra-ui/react";
import React, { useState, Suspense } from "react";
import { motion } from 'framer-motion';
import { BiChevronDown } from 'react-icons/bi'

const Spline = React.lazy(() => import('@splinetool/react-spline'));

function actions(){
	const [index_actions, setIndexActions] = useState(0);
	const actionWords=[
		{
			word:"design",
			gradient:"linear(to-l, #7928CA, #C92828)"
		},
		{
			word:"build",
			gradient:"linear(to-l, #00FFB4, #FFB400)"
		},
		{
			word:"develop",
			gradient:"linear(to-l, #FF0082, #0082FF)"
		}
	]
	useInterval(() => {
    	setIndexActions((index_actions + 1) % actionWords.length);
  	}, 5000);

	return (
		<Flex fontSize={[24, null, 38]} gap={2}>
			<Text>and I</Text>
			<motion.p
				animate={{ y: [-8, 0, 8] , opacity: [0, 1, 0]}}
				transition={{repeat: Infinity, duration: 5 }}
			>
				<Text as="span"
				bgGradient={actionWords[index_actions].gradient}
				bgClip='text'
				>
					{actionWords[index_actions].word}
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
	const [isLargerThanPhone] = useMediaQuery("(min-width: 480px)");

	const HeroStyle = {
		pos: "absolute",
		bottom: "8rem",
		left: "2rem",
		textColor: "white",
	}

  	return (
    	<Box id="/" pos="relative"  height={["90%", null, "100%"]}>
			<>
			{isLargerThanPhone ? (
				<Box height="100%"> 
					<Suspense fallback={<Box pt="30rem" ><Flex alignContent="center" justifyContent="center"><Spinner  size="xl" color='celest'/></Flex></Box>} >		
						<Spline scene="https://prod.spline.design/VzWk4CiSMXUqsDCv/scene.splinecode" />
					</Suspense>
				</Box>
				) : (
				<Box  height="100%"> 
					<Suspense fallback={<Box pt="15rem" ><Flex alignContent="center" justifyContent="center"><Spinner  size='xl' color='celest'/></Flex></Box>} >		
						<Spline scene="https://prod.spline.design/27M32db0G7wU3VFx/scene.splinecode" />
					</Suspense>
				</Box>
				)}
			</>
				
      		<Box sx={HeroStyle}>
			  	<Text fontSize={[30, null, 56]}>Hello, I'm <Image py={[1, null, 2]} width={[32, null, 60]} src="./icons/logo.png"/></Text>
				{actions()}
				<Text fontSize={[24, null, 38]}>interactive web applications.</Text>
      		</Box>

			<Box position="absolute" bottom={{ base: "10", md: "20" }} width="full" display="flex" justifyContent="center" alignItems="center">
				
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

