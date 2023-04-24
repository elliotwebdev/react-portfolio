import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion';
import {
  FormErrorMessage, FormLabel, FormControl, Input,
  Button, Textarea ,Box, Heading
} from '@chakra-ui/react'

export default function Contact() {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm()

  return (
    <motion.div
    initial={{ y: -1000, opacity: 0 }}
    animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
    exit={{ y: 1000, opacity: 0, transition: { duration: 1 } }}
  >
    <Box>
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
            
            }}> Get In Touch </Heading>
        </Box>
    </Box>
    <Box my={12} mx={[1, 8, 30, null , 60]} bg="indigo" borderRadius={48} border="1px solid" borderColor="celest" p={[8, 10, 12]}>
        <form method="POST" action="https://formsubmit.co/92cb9ddf59f1e62ddc366d8322abea72" style={{ color: 'white' }} >
          <FormControl mb={6} isInvalid={errors.name}>
            <FormLabel htmlFor='name'></FormLabel>
            <Input
              type="name"
              id='name'
              placeholder='Name'
              style={{ fontSize: "1.2em" }}
              {...register('name', {
                required: 'This is required'
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mb={6} isInvalid={errors.email}>
            <FormLabel htmlFor='email'></FormLabel>
            <Input
              type="email"
              id='email'
              placeholder='Email'
              style={{ fontSize: "1.2em" }}
              {...register('email', {
                required: 'This is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl mb={6} isInvalid={errors.message}>
            <FormLabel htmlFor='message'></FormLabel>
            <Textarea
              id='message'
              placeholder='Message'
              style={{ fontSize: "1.2em" }}
              {...register('message', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 10' },
              })}
            />
            <FormErrorMessage>
              {errors.message && errors.message.message}
            </FormErrorMessage>
          </FormControl>
          <Button mt={2} bg='pumpkin' textColor="white"
            _hover={{
              bg:"sunglow",
              color:"black"
            }}
            isLoading={isSubmitting} type='submit'>
            Submit
          </Button>
        </form>
      </Box>
      </Box>
      </motion.div>

  )
}