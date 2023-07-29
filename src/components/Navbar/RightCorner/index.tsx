import { Flex } from "@chakra-ui/react"
import { AuthButtons } from "./AuthButtons"

export const RightCorner = () => {
  return (
    <>
      {/* <AuthModal /> */}
      <Flex justify='center' align='center'>
        <AuthButtons />
      </Flex>
    </>
  )
}
