import {FC} from 'react'
import {Task} from '../interfaces'
import {HStack, Text} from '@chakra-ui/react'
import {FaEdit, FaTrash} from 'react-icons/fa'
import {useDeleteTaskMutation} from '../api/apiSlice'
import {toast} from 'react-hot-toast'
import {tasksActions} from '../store/slices/tasks'
import useDispatchedActions from '../store/useDispatchedActions'

type Props = {
  task: Task
  id: string
}

const TaskElement: FC<Props> = ({task, id}) => {
  const currentDate = new Date(task.dueDate).toLocaleDateString()
  const currentHour = new Date(task.dueDate).toLocaleTimeString()
  const [deleteTask] = useDeleteTaskMutation()

  const {setTaskToEdit, setTaskToEditId} = useDispatchedActions({
    setTaskToEdit: tasksActions.setTaskToEdit,
    setTaskToEditId: tasksActions.setTaskToEditId,
  })

  const deleteTaskHandler = async () => {
    try {
      await deleteTask({id})
      toast.success('Task deleted successfully.')
    } catch (error) {
      toast.error('Failed to delete task. Please try to refresh website.')
    }
  }

  const editTaskHandler = () => {
    setTaskToEdit(task)
    setTaskToEditId(id)
  }

  return (
    <HStack
      maxH='40px'
      w='100%'
      justifyContent='space-between'
      px='20px'
      py='10px'
      border='1px solid'
      borderRadius='20px'
      borderColor='#E8E8E8'
    >
      <Text>{task.description}</Text>
      <Text>
        {currentDate} {currentHour}
      </Text>
      <HStack gap='20px'>
        <FaEdit onClick={editTaskHandler} cursor='pointer' />
        <FaTrash onClick={deleteTaskHandler} cursor='pointer' />
      </HStack>
    </HStack>
  )
}

export default TaskElement
