import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from "@chakra-ui/react";
import React, { createContext, useEffect, useState } from "react";

// 1. create cart context and cart context provider for the entire application to have cart related data;

// 2. maintain cart data in the state; and also functions like addToCart, removeFromCart, checkout etc which updates the cart state are maintained in here

// 3. provide cart state and functions which can update the state from here so that entire application can comsume the values whenever and whereever required
export const CartContext  = createContext();
const CartContextProvider = ({children}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()


  const [cart,setCart] = useState([])

  useEffect(()=>{
    
    

  },[])
function addToCart(product){
  setCart([...cart,product]);
}
function removeFromCart(a){
  setCart([...cart.filter(el=>el.id!=a)])

}
function checkout(){
  
  return <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Customer
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    
}

  return <CartContext.Provider value={{addToCart,removeFromCart,checkout,cart,onOpen}}>{children}</CartContext.Provider> ;
};

export default CartContextProvider;
