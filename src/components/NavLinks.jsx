import {Flex, Menu, MenuButton, MenuList, MenuItem, Icon, Text, Link as ExtLink} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import { FaHatCowboy } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { BiChevronDown } from 'react-icons/bi'
import { TbArrowUpRight} from 'react-icons/tb'

const handleClick = () => {
  const myDiv = document.getElementById('header');
    setTimeout(() => {
      myDiv.scrollIntoView({
        behavior: 'smooth'
      });
    }, 250);
};

export default function NavLinks() {
    const MenuListStyle = {
      background: "rgb(16, 20, 40)",
      alignItems:"end",
      border:"none",
      borderRadius:"1rem"
    }
    const MenuStyle = {
      background: "rgb(16, 20, 40)",
      alignItems:"end",
      border:"none",
      borderRadius:"1rem",
      _hover: {
        background: "rgb(50, 50, 70)",
      }
    }
    
    return (
      <Flex gap={6} >
      <Menu>
        {/* About Me */}
        <MenuButton  fontFamily="Syne">
          ABOUT
          <Icon as={BiChevronDown} />
        </MenuButton> 
        
        <MenuList sx={MenuListStyle}>

          <NavLink to="/">
            <MenuItem sx={MenuStyle} onClick={handleClick} icon={<Icon as={FaHatCowboy} />}>   
                <Text fontFamily="Syne">Explore</Text>
            </MenuItem>
          </NavLink>
          <NavLink to="contact">
            <MenuItem sx={MenuStyle} onClick={handleClick} icon={<Icon as={GrMail} />}>   
                <Text fontFamily="Syne">Contact</Text>
            </MenuItem>
          </NavLink>

          <ExtLink href="./ElliotHenriquez_2023Resume.pdf" isExternal>
            <MenuItem sx={MenuStyle} icon={<Icon as={BsFileEarmarkPdfFill}/>} >             
              <Text fontFamily="Syne">Download Resume</Text>
            </MenuItem>
          </ExtLink>
       
        </MenuList>
       
      </Menu>

      {/* External Links */}
      <Menu>
        <MenuButton fontFamily="Syne" >
          CONNECT
          <Icon as={BiChevronDown} />
        </MenuButton> 

        <MenuList sx={MenuListStyle}>
          <ExtLink href='https://linkedin.com/in/elliothenriq' isExternal>
            <MenuItem sx={MenuStyle} icon={<Icon as={AiFillLinkedin}/>} command={<Icon as={TbArrowUpRight}/>}>             
              <Text fontFamily="Syne">LinkedIn</Text>
            </MenuItem>
          </ExtLink>

          <ExtLink href='https://github.com/elliotwebdev' isExternal>
            <MenuItem sx={MenuStyle} icon={<Icon as={AiFillGithub} />} command={<Icon as={TbArrowUpRight}/>}>
              <Text fontFamily="Syne">GitHub</Text>
            </MenuItem>
          </ExtLink>

        </MenuList>
      </Menu>
      </Flex>
    );
  };