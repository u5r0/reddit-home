import { Flex } from "@chakra-ui/react"
import { Buttons } from "./Buttons"
import { Directory } from "./Directory"

export const RightSide = () => {
  return (
    <>
      {/* <AuthModal /> */}
      <Flex justify='center' align='center'>
        <Buttons />
        <Directory />
      </Flex>
    </>
  )
}
