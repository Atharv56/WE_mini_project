import React from 'react'
import axios from 'axios'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import AnimatedPage from './Animate/Animate';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
  const [userDetails, setUserDetails] = useState({
      email: "",
      password: "" 
  });
  const handleChange = (e) => {
    setUserDetails((prev) => ({...prev, [e.target.name]: e.target.value}));
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', userDetails);
      // console.log("response: " + response.data);
      if(response.data == 1) {
        window.location.href = "/home";
        localStorage.setItem("isIn", 'true');
      }
      else {
        localStorage.setItem("isIn", 'false');
      }
      // else if{}
    } catch (error) {
      console.log(error);
    }
  }
  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      document.getElementById("togglePassword").className = "far fa-eye-slash";
      x.type = "text";
    } else {
      document.getElementById("togglePassword").className = "far fa-eye";
      x.type = "password";
    }
  }

  return (
    <>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg = "#0F0F0F"
      
      >
      <AnimatedPage>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading color={'#dd4d51'} fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'#dd4d51'}>
            to enjoy all of our cool <Link color={'#FFFFFF'} _hover={{color: '#dd4d51'}}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          
          rounded={'lg'}
          bg ={'#e0e0e0'}
          boxShadow={'2xl'}
          p={8}
          borderRadius="30">
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Username</FormLabel>
              <Input borderRadius="15" type="sutring" borderColor="black" focusBorderColor="red"
              onChange={handleChange}
              id="userid" name="email" 
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input borderRadius="15" type="password" borderColor="black" focusBorderColor="red"
              onChange={handleChange}
              id="myInput" name="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox colorScheme='red' defaultChecked>Remember me</Checkbox>
                <Link 
                as={RouterLink} to="/signup" color={'#FF6B6B'} _hover={{color: '#0F0F0F'}}
                >
                  New User?</Link>
              </Stack>
              <Button
                bg={'#FF6B6B'}
                color={'white'}
                borderRadius="30"
                _hover={{
                  bg: '#0F0F0F',
                }}
                onClick={handleSubmit}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      </AnimatedPage>
    </Flex>
    </>

  )
}

export default Login