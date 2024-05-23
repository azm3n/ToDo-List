import {CircularProgress, Stack, VStack} from '@chakra-ui/react'
import {useEffect} from 'react'
import {useLazyGetTasksQuery} from './api/apiSlice'
import {toast} from 'react-hot-toast'
import {TaskForm, SearchListWrapper} from './components'

const App = () => {
  const [getTasks, {isLoading}] = useLazyGetTasksQuery()

  useEffect(() => {
    const getInitData = async () => {
      try {
        await getTasks()
      } catch (error) {
        toast.error('Failed to fetch tasks. Please try to refresh website.')
      }
    }

    getInitData()
  }, [])

  return (
    <Stack justifyContent='center' alignItems='center' w='100%' h='100%'>
      <VStack w='40%' gap='40px'>
        <TaskForm />
        {isLoading ? <CircularProgress /> : <SearchListWrapper />}
      </VStack>
    </Stack>
  )
}

export default App
