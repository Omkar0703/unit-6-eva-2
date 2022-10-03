import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  const {token} = useContext(AuthContext);
  return <Box bg='gray' w='100%' p={4} color='white' display="flex" justifyContent="space-between">
    <Box>{token != "" &&  token }</Box>
    <Box display="flex" width="50%" justifyContent="end" gap="20px" pr="40px">
      <Link to={"/"}>HOME</Link>
      <Link to={"/login"}>LOGIN</Link>
      <Link to={"/cart"}>CART</Link>
      
    </Box>

  
</Box>;
};

export default Navbar;