import { Box, Text, Flex, Spacer, Icon } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { BiChevronDown } from 'react-icons/bi'

export default function Landing() {

  return (
    <Box>
      <Box mx={[6, 12 ,28]} py={12}>
        <Flex justifyContent="center">
            <Text textColor="pumpkin" as="em" fontSize={[16, 18, 20]}>Select a box below to reveal more...</Text>
        </Flex>
        <motion.div 
        animate={{ y: [-6, 12, -6] }} 
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }} >
            <Flex>
            
              <Icon boxSize={20} color="pumpkin" as={BiChevronDown} />
              <Spacer />
              <Icon boxSize={20} color="pumpkin" as={BiChevronDown} />
              <Spacer />
              <Icon boxSize={20} color="pumpkin" as={BiChevronDown} />
              

            </Flex>
        </motion.div>
      </Box>
    </Box>

    )
  }
