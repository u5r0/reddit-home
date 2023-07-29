import { Button, Icon } from "@chakra-ui/react"
import { BsQrCodeScan } from 'react-icons/bs'

export const AuthButtons = () => {
  return (
    <>
      <Button 
        variant='outline' 
        height='32px'
        mr={4}
        width={{ base: '70px', md: '120px'}}
        display={{ base: 'none', sm: 'flex'}}
      >
        <Icon as={BsQrCodeScan} paddingRight='10px' fontSize='22pt' />
        Get App
      </Button>
      <Button 
        variant='solid' 
        height='32px'
        mr={2}
        width={{ base: '70px', md: '120px'}}
        display={{ base: 'none', sm: 'flex'}}
      >
        Log In
      </Button>
    </>
  )
}
