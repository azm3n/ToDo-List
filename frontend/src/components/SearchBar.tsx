import {Input} from '@chakra-ui/react'
import {FC} from 'react'

type Props = {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchBar: FC<Props> = ({handleSearch}) => {
  return (
    <Input onChange={handleSearch} placeholder='Search for particular task' />
  )
}

export default SearchBar
