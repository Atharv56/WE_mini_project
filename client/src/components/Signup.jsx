import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import AnimatedPage from './Animate/Animate';

import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    Link
  } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';





const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({
      name: "",
      email: "",
      password: "" 
  });
  const handleChange = (e) => {
    setUserDetails((prev) => ({...prev, [e.target.name]: e.target.value}));
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/register', userDetails);
      // console.log("response: " + response.data);
      if(response.data == 1) {
        window.location.href = "/login";
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
    
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg='#0F0F0F'>
      <AnimatedPage>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading color={'#dd4d51'} fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'#dd4d51'}>
            to enjoy all of our cool <Link color={'#FFFFFF'} _hover={{color: '#dd4d51'}}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg ={'#e0e0e0'}
          boxShadow={'lg'}
          p={8}
          pl={20}
          pr={20}
          borderRadius="30">
          <Stack spacing={4}>
              <Box>
                <FormControl >
                  <FormLabel>Name</FormLabel>
                  <Input borderRadius="15" borderColor="black" focusBorderColor="red"
                    type="text"
                    onChange={handleChange}
                    id="userid" name="name"
                  />
                </FormControl>
              </Box>
            <FormControl>
              <FormLabel>User Name</FormLabel>
              <Input type="text" borderRadius="15" borderColor="black" focusBorderColor="red"
              onChange={handleChange}
              id="userid" name="email"
              />
            </FormControl>
            <FormControl >
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input borderRadius="15" type={showPassword ? 'text' : 'password'} borderColor="black" focusBorderColor="red"
                onChange={handleChange}
                id="userid" name="password"/>
                {/* <InputRightElement h={'full'}>
                  <Button
                    color={'red'}
                    _hover={{
                      color: '#0F0F0F',
                    }}
                    _active={{
                        transform: 'scale(1.1)',
                        color: '#0F0F0F',
                    }}
                    
                    variant={'ghost'}
                    onClick={() =>
                      myFunction()
                    
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement> */}
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                bg={'#FF6B6B'}
                color={'white'}
                borderRadius="30"
                _hover={{
                  bg: '#0F0F0F',
                }}
                loadingText="Submitting"
                size="lg"
                className='Register'

                onClick={handleSubmit}

                >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link as={RouterLink} to="/login" color={'#FF6B6B'} _hover={{color: '#0F0F0F'}}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      </AnimatedPage>
    </Flex>

  )
}

export default SignUp;