import {FC} from 'react'
import {Text, VStack} from '@chakra-ui/react'
import {Status, Task} from '../interfaces'
import TaskSection from './TaskSection'

type Props = {
  tasks: [string, Task][]
}

const TaskList: FC<Props> = ({tasks}) => {
  if (!tasks.length) return <Text>Your task list is empty</Text>

  return (
    <VStack w='100%' gap='20px'>
      <TaskSection tasks={tasks} status={Status.TODO} />
      <TaskSection tasks={tasks} status={Status.IN_PROGRESS} />
      <TaskSection tasks={tasks} status={Status.DONE} />
    </VStack>
  )
}

export default TaskList
