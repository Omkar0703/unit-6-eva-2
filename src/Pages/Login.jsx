import { Box ,Button,Input, InputGroup, InputRightElement, Stack, Text} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";

// 1. this page should contain two input boxes which takes email and password from the user and a login button.

// 2. in this page you should get the auth state from auth context and based on auth state;if user is already logged in then user should be redirected to home page

// 3. network request (POST) should be made to api endpoint `https://reqres.in/api/login` with email and password details;

// 4. button should not allow additional click till API call is complete; user should see loading indicator on login button till API call is complete;

// 5. upon successful login, login success action is dispatched with token we get back as response and the authentication status and token is updated in the context API. user then gets redirected to home page;

// 6. Proper Alert should be displayed to user upon unsuccessful API call. the message can be `Something went wrong. please refresh.`

const Login = () => {
  const {isAuth,handleLogin} = useContext(AuthContext);
  const [details,setDetails] = useState({
    email:"",
    password:""
})
const [show,setShow] = useState(false);
function handleChange(e){
  const {name,value} = e.target;
  setDetails({...details,[name]:value})
}
function handleClick (){
  setShow(!show)
  
}
const {email,password} = details;
if(isAuth){
  return <Navigate to="/"/>

}


  return <Box m="auto" mt="70px" width="300px" >
  <Text textAlign="center">LOGIN</Text>
  <Stack spacing={3}>


  <Input placeholder='Enter Email Address' name='email' value={email} onChange={handleChange} />
<InputGroup size='md'>
<Input
  pr='4.5rem'
  type={show ? 'text' : 'password'}
  placeholder='Enter password'
  name="password" 
  value={password}
  onChange={handleChange} 
/>
<InputRightElement width='4.5rem'>
  <Button h='1.75rem' size='sm' onClick={handleClick}>
    {show ? 'Hide' : 'Show'}
  </Button>
</InputRightElement>
</InputGroup>
<Button onClick={()=>handleLogin(details)} colorScheme='teal' size='lg'>
Login
</Button>

</Stack>
</Box>
};

export default Login;