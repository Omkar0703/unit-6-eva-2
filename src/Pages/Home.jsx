import { Badge, Box, Button, Image, Wrap } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext/AuthContextProvider";
import { CartContext } from "../Context/CartContext/CartContextProvider";

// 1. API request should be made to `https://fakestoreapi.com/products` or (`https://jabz-101-app.herokuapp.com/products` - please use this one if the fakestore api doesn't work ) on mount and get the data and the same data should be displayed in the form of cards ( 3 per row in large screens, 2 per row  in medium screens and 1 per row  in small screen  )

// 2. loading, error and data state should be maintained; show proper loading indicator and error state when required;

// 3. each product card should atleast contain product image, title , price and a add to cart button;

// 4. cart data is maintained in the cart context and based on the cart data if the product is already added to the cart, then the add to cart button should be disabled for that particular product;

// 5. clicking on add to cart button will add the product to the cart; this cart is maintained in the cart context;

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {isAuth} = useContext(AuthContext);
  const navigate = useNavigate();
  const {addToCart} = useContext(CartContext);







  useEffect(() => {
    
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setData(json);
        })
     
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if(!isAuth){
    navigate("/login")
    return;
  }
 
  return <Wrap justify="space-between" mt={8}>
  {data.map((el) => {
    return (
      <Box key={el.id}
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        width="300px"
      >
        <Image cursor="pointer" height="250px" src={el.image} margin="auto" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {el.category}
            </Badge>
          </Box>

          <Box cursor="pointer"
          _hover={{color:"teal"}}
  
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={2}
            width="250px"
          >{el.title}
            
          </Box>
          

          <Box>$ {el.price}</Box>

          {/* <Box display="flex" mt="2" alignItems="center">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < el.rating.rate ? "teal.500" : "gray.300"}
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {el.rating.count} reviews
            </Box>
          </Box> */}
        </Box>
        <Box mb={5} display="flex" width="100%" justifyContent="space-evenly">
        <Button onClick={()=>addToCart(el)}  width="200px" colorScheme='gray'>ADD TO CART</Button></Box>
        
      </Box>
    );
  })}
</Wrap>;
};

export default Home;