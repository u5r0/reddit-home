import { Flex, Image } from "@chakra-ui/react"

export const Navbar = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" height="30px" alt="" />
        <Image 
          src="/images/redditText.svg" 
          height="46px" alt=""
          display={{ base: 'none', md: 'unset'}} />
      </Flex>
    </Flex>
  )
}
