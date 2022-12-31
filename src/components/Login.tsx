import React from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Text,
    Center,
  } from '@chakra-ui/react'
 

const Login = () => {

    const handleSubmit =(event:any)=>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password =form.password.value;
        console.log(email, password)
        
      }

    return (
      <div>
         <div style={{width: '400px', margin: 'auto', padding: '12px'}}>
        <form onSubmit={handleSubmit}>
        <FormControl bg='teal' padding={'20px'} rounded='2xl'>
            <Center><Text fontSize={'4xl'} textColor={'white'}>Login</Text></Center>
        <FormLabel>Email address</FormLabel><Input type='email'name='email' placeholder='Type Your Email'/>
        <FormLabel>Password</FormLabel><Input marginBottom={'10px'} type='password' name='password' placeholder='Type Your Email'/>
        <Button type='submit' bgGradient='linear(to-r, green.200, pink.500)' size='lg'>Login</Button>
        
      </FormControl>
        </form>
       </div>
      </div>
    );
};

export default Login;