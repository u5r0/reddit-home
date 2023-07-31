import { Flex, Icon } from '@chakra-ui/react'
import { FiChevronDown, FiUser } from 'react-icons/fi'

export const Directory = () => {
  return (
    <Flex 
      align='center' 
      border='2px solid' 
      borderColor='gray.400' 
      borderRadius='4px'
      padding='4px 12px'
    >
      <Icon as={FiUser} fontSize='20px' />
      <Icon as={FiChevronDown} fontSize='20px' />
    </Flex>
  )
}
