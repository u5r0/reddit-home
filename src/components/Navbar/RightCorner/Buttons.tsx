import { Button, Icon } from "@chakra-ui/react"
import NextLink from 'next/link'
import { Image, Link } from "@chakra-ui/react"
import { BsQrCodeScan } from 'react-icons/bs'

export const Buttons = () => {
  return (
    <>
      <Link as={NextLink} href="https://reddit.com/r/place">
        <Image src="/images/r_place.svg" alt="" height="1.25rem" paddingRight='20px' />
      </Link>
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
