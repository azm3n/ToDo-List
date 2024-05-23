import {Input, Button, VStack} from '@chakra-ui/react'
import {FC} from 'react'
import {Status} from '../interfaces'
import {useAddTaskMutation, useUpdateTaskMutation} from '../api/apiSlice'
import {toast} from 'react-hot-toast'
import StatusSelect from './StatusSelect'
import {useSelector} from 'react-redux'
import {selectTaskToEdit, selectTaskToEditId} from '../store/selectors/tasks'
import useDispatchedActions from '../store/useDispatchedActions'
import {tasksActions} from '../store/slices/tasks'
import {DEFAULT_TASK} from '../constants'

const TaskForm: FC = () => {
  const task = useSelector(selectTaskToEdit)
  const taskId = useSelector(selectTaskToEditId)

  const {setTaskToEdit, setTaskToEditId} = useDispatchedActions({
    setTaskToEdit: tasksActions.setTaskToEdit,
    setTaskToEditId: tasksActions.setTaskToEditId,
  })

  const [addTask] = useAddTaskMutation()
  const [updateTask] = useUpdateTaskMutation()

  const changeDescriptionHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTaskToEdit({...task, description: event.target.value})
  }

  const changeDueDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskToEdit({...task, dueDate: event.target.value})
  }

  const changeStatusHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTaskToEdit({...task, status: event.target.value as Status})
  }

  const formHandler = async () => {
    try {
      if (task.description === '' || task.dueDate === '') {
        toast.error('Provide description and due date in order to create task.')
        return
      }
      if (taskId !== null) {
        await updateTask({id: taskId, task})
        setTaskToEdit(DEFAULT_TASK)
        setTaskToEditId(null)
        toast.success('Task modified successfully.')
        return
      }

      await addTask(task)
      setTaskToEdit(DEFAULT_TASK)

      toast.success('Task added successfully.')
    } catch (error) {
      toast.error("Task wasn't added. Please try to refresh website.")
    }
  }
  console.log({task})
  return (
    <VStack w='100%' gap='20px'>
      <VStack w='100%'>
        <Input
          value={task.description}
          placeholder='What is the task name?'
          onChange={changeDescriptionHandler}
        />
        <Input
          value={task.dueDate}
          type='datetime-local'
          placeholder='Due date'
          onChange={changeDueDateHandler}
        />
        <StatusSelect
          value={task.status}
          changeStatusHandler={changeStatusHandler}
        />
      </VStack>
      <Button onClick={formHandler}>
        {taskId ? 'Modify task' : 'Add task'}
      </Button>
    </VStack>
  )
}

export default TaskForm
