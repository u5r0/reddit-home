import { Flex, Image } from "@chakra-ui/react"
import { SearchInput } from "./SearchInput"
import { RightSide } from "./RightSide"

export const Navbar = () => {
  return (
    <Flex bg="white" height="46px" padding="0rem 1.25rem" justify='space-between'>
      <Flex align="center">
        <Image 
          src="/images/Reddit_Lockup_OnWhite.svg" 
          height="35px" 
          alt="" 
          display={{ base: 'none', md: 'unset' }}
        />
        <Image 
          src="/images/Reddit_Mark_OnWhite.svg" 
          height="35px" alt=""
          display={{ md: 'none' }} 
        />
      </Flex>
      <SearchInput />
      <RightSide />
    </Flex>
  )
}
