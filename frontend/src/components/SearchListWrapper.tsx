import {FC, useMemo, useRef, useState} from 'react'
import {useSelector} from 'react-redux'
import {createGetTasksSelector} from '../store/selectors/api'
import {VStack} from '@chakra-ui/react'
import TaskList from './TaskList'
import SearchBar from './SearchBar'

const SearchListWrapper: FC = () => {
  const selectSortedCompanyCosmetologists = useMemo(
    () => createGetTasksSelector(),
    []
  )
  const tasks = useSelector(selectSortedCompanyCosmetologists)

  const [searchValue, setSearchValue] = useState('')
  const debounceRef = useRef<number>()

  const listOfTasks =
    searchValue !== ''
      ? Object.entries(tasks).filter(([_, task]) =>
          task.description.includes(searchValue)
        )
      : Object.entries(tasks)

  const searchBarHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      setSearchValue(event.target.value)
    }, 500)
  }

  return (
    <VStack w='100%' gap='20px'>
      <SearchBar handleSearch={searchBarHandler} />
      <TaskList tasks={listOfTasks} />
    </VStack>
  )
}

export default SearchListWrapper
