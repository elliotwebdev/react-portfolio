import { Box, Flex, Spacer, HStack, useMediaQuery, 
  IconButton, useDisclosure, Icon } from "@chakra-ui/react";
import NavLinks from "./NavLinks"
import { RxHamburgerMenu } from 'react-icons/rx'

import { AiOutlineCloseCircle } from 'react-icons/ai'
import SvgVite from "./svg/SvgVite";
import SvgViteName from "./svg/SvgViteName";
import { Link } from "react-scroll"

export default function Navbar(){
  const { isOpen, onOpen, onClose } = useDisclosure();

	const NavbarStyle = {
		px: "4",
    py: "4",
    textColor: "white",
    background: "rgba(16, 20, 40, 0.8)",
    alignItems:"center",
    justifyContent:"space-between",
    borderRadius: "2rem",
    backdropFilter:"auto",
    backdropBlur:"3px"
	}
  const [isLargerThanPhone] = useMediaQuery("(min-width: 480px)");

  return (
    <Flex fontSize={[16, null, 22]} justify="center" position="fixed" mt={4} width="100%" zIndex="999">
      <HStack sx={NavbarStyle} width={{ base: "95%", sm: "75%", md: "55%" }}  >
      <Link to="/" as="a" href="https://elliotweb.dev" aria-label="Elliot Web.Dev" smooth={true} duration={1500}>
			{isLargerThanPhone ? (
          <Icon as={SvgViteName} width="131" height="46"/>
				) : (
          <Icon as={SvgVite} width="42" height="46"/>
				)}
			</Link>
        <Spacer />     
        <Box display={{base:"none", md:"block"}}>
          <NavLinks />
        </Box>
        <IconButton
          alignSelf="center"
          size="md"
          colorScheme='none'
          icon={isOpen ?  <Icon as={AiOutlineCloseCircle} /> : <Icon as={RxHamburgerMenu} />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        {isOpen ? (
            <NavLinks />
        ) : null}
      </HStack>
  </Flex> 
  );
};
