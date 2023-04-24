import { Box, Card, CardBody, CardFooter, Flex, Stack, Button, Text, Heading, Spinner } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { motion } from 'framer-motion';
import { AiFillGithub } from 'react-icons/ai'
import { TbArrowUpRight} from 'react-icons/tb'

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Work() {
  return (
    <motion.div
    initial={{ y: -1000, opacity: 0 }}
    animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
    exit={{ y: 1000, opacity: 0, transition: { duration: 1 } }}
  >
    <Suspense fallback={null} >	
    <Box  textColor="white" >
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
            
            }}> Projects </Heading>
        </Box>
    </Box>
    <Stack py={12} gap={4}>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          bg="indigo"
          borderColor="celest"
          textColor="white"
          borderRadius={48}
        > 
          <Box p={2} width={["100%", "200%"]} >
            <Suspense fallback={<Box pt="2rem" ><Flex alignContent="center" justifyContent="center"><Spinner  size="lg" color='pumpkin'/></Flex></Box>} >
              <Spline scene="https://prod.spline.design/ec5g7yc-Cszz77eI/scene.splinecode" />
            </Suspense>
          </Box>

          <Stack mx={[1, 4, 8]}>
            <CardBody textAlign={["center", null, null, "left"]}>
              <Heading size={["xl", "2xl"]} color="pumpkin">Trailer & Digital Editor</Heading>

              <Text fontSize={[16, 20, 22 ]} pt={[4, null, 10]}>
              Derek Henriquez is an accomplished media entertainment editor and works in groundbreaking 
              television series and movies. Experienced in multiple genres and various production companies, 
              this site showcases the best of his work.
              </Text>
            </CardBody>

            <CardFooter gap={2} justifyContent="center">
              <Button as="a" variant='solid' bg="pumpkin" 
                fontSize={[12, 16, 20 ]} 
                href="https://derekhenriquez-editor.com/"
                rightIcon={<TbArrowUpRight/>}
                _hover={{
                  bg:"sunglow",
                  color:"black"
                }}>
                Visit Website
              </Button>
              <Button as="a" variant='solid' bg="pumpkin" 
                fontSize={[12, 16, 20 ]} 
                href="https://github.com/141Wonders/vimeoalbum-portfolio"
                rightIcon={<AiFillGithub/>}
                _hover={{
                  bg:"sunglow",
                  color:"black"
                }}>
                View Source
              </Button>
            </CardFooter>
          </Stack>
        </Card>

        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          bg="indigo"
          borderColor="celest"
          textColor="white"
          borderRadius={48}
        >
          <Stack mx={[1, 4, 8]}>
            <CardBody textAlign={["center", null, null, "left"]}>
              <Heading size={["xl", "2xl"]} color="pumpkin">Refrigeration Gaskets of Texas, INC.</Heading>

              <Text fontSize={[16, 20, 22 ]} pt={[4, null, 10]}>
              RGT is a Houston based refrigeration goods manufacturer. The company 
              specializes in custom made gaskets, doors, and refrigeration boxes. 
              With an online store presence, the company is now ahead of their 
              competitors across state lines.
              </Text>
            </CardBody>

            <CardFooter justifyContent="center">
              <Button as="a" variant='solid' bg="pumpkin" textColor='white' 
                fontSize={[12, 16, 20 ]} 
                href="https://refrigerationgaskets.com/"
                rightIcon={<TbArrowUpRight/>}
                _hover={{
                  bg:"sunglow",
                  color:"black"
                }}>
                Visit Website
              </Button>
            </CardFooter>
          </Stack>
          <Box p={[2,10]} width={["100%", "200%"]}>
            <Suspense fallback={<Box pt="2rem" ><Flex alignContent="center" justifyContent="center"><Spinner  size="lg" color='pumpkin'/></Flex></Box>} >
              <Spline scene="https://prod.spline.design/DhMw750TDOOZ3Nrs/scene.splinecode" />
            </Suspense>
          </Box>
        </Card>

    </Stack>
    </Suspense>
    </motion.div>
  )
}