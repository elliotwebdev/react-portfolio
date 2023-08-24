import React, { useState } from 'react';
import { Button, Box, Tooltip, Wrap, Flex, VStack, Heading } from '@chakra-ui/react';
import  BallCanvas from "./canvas/Ball.jsx";


const technologies = [
  {
    name: "JavaScript",
    icon: "./tech/javascript.png",
    option: "scripting"
  },
  {
    name: "TypeScript",
    icon: "./tech/typescript.png",
    option: "scripting"
  },
  {
    name: "Vue",
    icon: "./tech/vue.png",
    option: "frontend"
  },
  {
    name: "React",
    icon: "./tech/reactjs.png",
    option: "frontend"
  },
  {
    name: "Python",
    icon: "./tech/python.png",
    option: "scripting"
  },
  {
    name: "Flask",
    icon: "./tech/flask.png",
    option: "frontend"
  },
  {
    name: "Figma",
    icon: "./tech/figma.png",
    option: "design"
  },
  {
    name: "Spline",
    icon: "./tech/spline.png",
    option: "design"
  }
];


const FilteredList = () => {
  const [filter, setFilter] = useState('All');
  const filteredData = filter === 'All' ? technologies : technologies.filter(item => item.option === filter);

  return (
    <Box >
      <Box textColor="white" >
        <Box height="1px"> </Box>
        <Box display="flex" justifyContent="center" mx={[6, 12 ,24]} mt={28}>
          <Heading 
          _before={{
            content: '""',
            width:"100px",
            height:"8px",
            borderColor:"pumpkin", 
            borderRadius:"3xl",
            borderWidth:"4px", 
            display:"flex",
            
            }}> Technologies </Heading>
        </Box>
    </Box>

    <Box bg="indigo" borderRadius={48} border="1px solid" borderColor="celest" my={12}>
    <VStack>
      <Wrap my={6} px={2} spacing={2} justify="center" >
        <Button onClick={() => setFilter('All')}   
            bg={filter === 'All' ? 'sunglow' : 'pumpkin'}
            color={filter === 'All' ? 'black' : 'white'}
            _hover={{ bg: 'sunglow', color: 'black' }}
            variant={filter === 'All' ? 'solid' : 'outline'}>All</Button>

        <Button onClick={() => setFilter('scripting')}
            bg={filter === 'scripting' ? 'sunglow' : 'pumpkin'}
            color={filter === 'scripting' ? 'black' : 'white'}
            _hover={{ bg: 'sunglow', color: 'black' }}
            variant={filter === 'scripting' ? 'solid' : 'outline'}>Programming</Button>

        <Button onClick={() => setFilter('frontend')}
            bg={filter === 'frontend' ? 'sunglow' : 'pumpkin'}
            color={filter === 'frontend' ? 'black' : 'white'}
            _hover={{ bg: 'sunglow', color: 'black' }}
            variant={filter === 'frontend' ? 'solid' : 'outline'}>Frameworks & Libraries</Button>

        <Button onClick={() => setFilter('design')}
            bg={filter === 'design' ? 'sunglow' : 'pumpkin'}
            color={filter === 'design' ? 'black' : 'white'}
            _hover={{ bg: 'sunglow', color: 'black' }}
            variant={filter === 'design' ? 'solid' : 'outline'}>Design Tools</Button>
      </Wrap>
      
      <Flex flexWrap="wrap" justifyContent="center">
        {filteredData.map((technology) => (
          <Box px={6} key={technology.name} width={{ base: "50%", sm: "auto" }}>
            <Tooltip placement='top' hasArrow arrowSize={15} label={technology.name} closeOnClick={false} bg='sunglow' textColor="black" offset>
              <Box w={{ base: "100%", sm: "auto" }}><BallCanvas icon={technology.icon} /> </Box>
            </Tooltip>
          </Box>
        ))}
      </Flex>

    </VStack>
    </Box>
    </Box>
  );
};

export default FilteredList;
