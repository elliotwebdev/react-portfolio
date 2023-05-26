import { Box, Card, CardBody, CardFooter, Flex, Stack, Button, Text, Heading, Spinner, Image} from "@chakra-ui/react";
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
          <Stack mx={[1, 4, 8]}>
            <CardBody textAlign={["center", null, null, "left"]}>
              <Heading size={["xl", "2xl"]} color="pumpkin">Renzo Gracie Events Calendar</Heading>

              <Text fontSize={[16, 20, 22 ]} pt={[4, null, 10]}>
              Discover the ultimate calendar application through Renzo Events! Streamline your training with ease as you explore a network of distinguished
              Renzo Gracie affiliate academies, offering diverse jiu jitsu and auxiliary fitness classes. With an intuitive interface; effortlessly 
              browse schedules, set personalized training plans, and stay motivated to train.
              </Text>
            </CardBody>

            <CardFooter gap={2} justifyContent="center">
              <Button as="a" variant='solid' bg="pumpkin" textColor='white' 
                fontSize={[12, 16, 20 ]} 
                href="https://renzo.events/"
                rightIcon={<TbArrowUpRight/>}
                _hover={{
                  bg:"sunglow",
                  color:"black"
                }}>
                Visit Website
              </Button>
              <Button as="a" variant='solid' bg="pumpkin" 
                fontSize={[12, 16, 20 ]} 
                href="https://github.com/141Wonders/renzo-events"
                rightIcon={<AiFillGithub/>}
                _hover={{
                  bg:"sunglow",
                  color:"black"
                }}>
                View Source
              </Button>
            </CardFooter>
          </Stack>
          <Box px={[4,6]} pb={[8,0]} display="flex" >
            <Suspense fallback={<Box pt="2rem" ><Flex alignContent="center" justifyContent="center"><Spinner  size="lg" color='pumpkin'/></Flex></Box>} >
                <Box display="flex" justifyContent="center" alignItems="center" >
                  <Image border="2px" borderRadius="md" borderColor="celest"  src="renzo_events.jpg" alt='renzo events calendar' />
                </Box>
            </Suspense>
          </Box>
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
          <Box p={2} width={["100%", "200%"]} >
            <Suspense fallback={<Box pt="2rem" ><Flex alignContent="center" justifyContent="center"><Spinner  size="lg" color='pumpkin'/></Flex></Box>} >
              <Spline scene="https://prod.spline.design/ec5g7yc-Cszz77eI/scene.splinecode" />
            </Suspense>
          </Box>

          <Stack mx={[1, 4, 8]}>
            <CardBody textAlign={["center", null, null, "left"]}>
              <Heading size={["xl", "2xl"]} color="pumpkin">Trailer & Digital Editor</Heading>

              <Text fontSize={[16, 20, 22 ]} pt={[4, null, 10]}>
              Derek Henriquez, a highly skilled media entertainment editor, has an impressive portfolio of groundbreaking television series and movies. 
              With expertise spanning across multiple genres and collaborations with various production companies, this website presents a curated selection 
              of his finest works. With a reputation for delivering captivating and visually stunning content, his work continues to captivate audiences worldwide.
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
            <CardBody  textAlign={["center", null, null, "left"]}>
              <Heading size={["xl", "2xl"]} color="pumpkin">Refrigeration Gaskets of Texas, INC.</Heading>

              <Text fontSize={[16, 20, 22 ]} pt={[4, null, 10]}>
              A Houston-based manufacturer of refrigeration goods, stands out 
              in the industry with its specialization in crafting custom-made gaskets, 
              doors, and refrigeration boxes. Through the establishment of an online store, 
              the company has gained a competitive edge over its rivals, extending its 
              reach beyond state lines. 
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
              <Spline scene="https://prod.spline.design/3pGu4TryZYwCCriU/scene.splinecode" />
            </Suspense>
          </Box>
        </Card>

    </Stack>
    </Suspense>
    </motion.div>
  )
}