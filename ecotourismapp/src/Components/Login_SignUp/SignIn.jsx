import React, { useState } from 'react'
import video from '../video/IncredibleIndia.webm'
import { Box,Center,FormControl,FormLabel,Input,Text,Container,Link,VStack,Button,Stack,InputRightElement,InputGroup,useToast,Alert,AlertDescription,AlertIcon,AlertTitle,Checkbox} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import {BsEyeSlashFill,BsEyeFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


const Signin = () => {
    const [show,setShow]=useState(false)
    const navigate = useNavigate();
    const [isLoading,setIsLoading]=useState(false)
    const [email,setEmail]=useState('')
    const [password,setpassWord]=useState('');

    const toast = useToast();

    const handleClick = () => {
      setShow(!show);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const existingUserData = JSON.parse(localStorage.getItem('userData')) || [];
  
      const user = existingUserData.find(user => user.email === email && user.password === password);
      const emailExists=existingUserData.find(user=>user.email===email);
      const passwordExists=existingUserData.find(user=>user.password===password);
  
      if (email === '' && password === '') {
        toast({
          title: 'Please Fill All Details',
          status: 'error',
          duration: 1500,
          isClosable: true,
          colorScheme: 'red'
        });
      }
      else if(email==='')
      {
        toast({
          title: 'Please Enter Email',
          status: 'error',
          duration: 1500,
          isClosable: true,
          colorScheme: 'red'
        });
      }
      else if(password==='')
      {
        toast({
          title: 'Please Enter Password',
          status: 'error',
          duration: 1500,
          isClosable: true,
          colorScheme: 'red'
        });
      }
      else if(!emailExists)
      {
        toast({
          title: 'Wrong Email.',
          status: 'error',
          duration: 1500,
          isClosable: true,
          colorScheme: 'red'
        });
      }
      else if(!passwordExists)
      {
        toast({
          title: 'Wrong Password.',
          status: 'error',
          duration: 1500,
          isClosable: true,
          colorScheme: 'red'
        });
      }
      else if (!user) {
        toast({
          title: 'Wrong Credentials.',
          status: 'error',
          duration: 1500,
          isClosable: true,
          colorScheme: 'red'
        });
      }
       else {
        setIsLoading(true);
  
        setTimeout(() => {
          setIsLoading(false);
          navigate('/');
          toast({
            title: 'Logged In Successfully.',
            status: 'success',
            duration: 2000,
            isClosable: true
          });
        }, 1000);
      }
    };
  return (
    <Box>
    <video autoPlay loop muted>
       <source src={video} type='video/mp4'/>
      </video>
   <Container pt={"100px"}>
   <Box bg={"blackAlpha.700"} p={"10"} border={"2px solid whiteAlpha.700"} borderRadius={"10px"} w={"600px"} >
   <Text fontSize={"2xl"} color={"white"} align={"center"}>Sign In</Text>
   <Text fontSize={"md"} color={"white"} align={"center"} pb={"4"}>Dont Have Account ?<Link color={"teal.500"} href='/signup'> Sign up</Link></Text>
  <form onSubmit={handleSubmit}>
  <VStack align={"stretch"} spacing={"2"} pb={"4"}>
   <Input type='email'  placeholder={'Email'} variant={"flushed"}  color={"whiteAlpha.700"} focusBorderColor='teal.400' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
   <InputGroup size='md'>
   <Input
     pr='4.5rem'
     type={show?'text':'password'}
     color={"whiteAlpha.700"}
     placeholder='Enter password'
     variant={"flushed"}
     focusBorderColor='teal.400'
     value={password}
     onChange={(e)=>setpassWord(e.target.value)}
     
   />
   <InputRightElement width='4.5rem'>
     <Button h='1.75rem' size='sm' color={"teal"}bg={"none"} bgColor={'none'}  onClick={handleClick}>
       {show ? <BsEyeSlashFill/> : <BsEyeFill/>}
     </Button>
   </InputRightElement>
 </InputGroup>
   </VStack>
 
   <Stack direction='row' spacing={4}>
   <Button
     isLoading={isLoading}
     loadingText='Logging In'
     colorScheme='teal'
     variant='solid'
     spinnerPlacement='end'
    w={"100%"}
   type='submit'
   >
   Sign In
   </Button>
 </Stack>
  </form> 

   </Box>
   </Container>
   

  
    </Box>
  )
}

export default Signin
