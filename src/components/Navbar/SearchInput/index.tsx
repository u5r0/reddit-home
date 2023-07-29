import { SearchIcon } from "@chakra-ui/icons"
import { Flex, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"

interface SearchInputProps {

}

export const SearchInput = () => {
  return (
    <Flex flexGrow={0.4} align='center'>
      <InputGroup>
        <InputLeftElement>
          <SearchIcon color='gray.300' />
        </InputLeftElement>
        <Input 
          placeholder='Search Reddit' 
          fontSize='11pt' 
          _placeholder={{ color: 'gray.500' }} 
          _hover={{
            bg: 'white',
            border: '1px solid',
            borderColor: 'blue.500',
          }}
          _focus={{
            outline: 'none',
            border: '1px solid',
            borderColor: 'blue.500',
          }}
          borderRadius='full'
          height='40px'
          bg='gray.50'
        />
      </InputGroup>
    </Flex>
  )
}
