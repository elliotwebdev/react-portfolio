import { Link } from "react-router-dom";
import SvgViteName from "./svg/SvgViteName";
import { Box, VStack, Flex, Text, Heading, Icon} from "@chakra-ui/react";


export default function NotFound()  {

  return (
    <Box pt="10rem" >
    <Flex bg="indigo" maxW="30rem" margin="auto" py={2} alignContent="center" justifyContent="center" borderRadius={48} border="1px solid" borderColor="celest">

      <VStack  >
          <Heading textColor="pumpkin">
              Page Not Found
          </Heading>

          <Text textColor="white">
              Click the logo to go back!
    
          </Text>
          
          <Link to="/">

            <Icon as={SvgViteName} width="131" height="46"/>
				
			    </Link>

      </VStack>
    
    </Flex>
    </Box>

  )
}
