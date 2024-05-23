import {VStack, Text} from '@chakra-ui/react'
import {FC} from 'react'
import TaskElement from './TaskElement'
import {Status, Task} from '../interfaces'

type Props = {
  status: Status
  tasks: [string, Task][]
}

const TaskSection: FC<Props> = ({status, tasks}) => {
  const filteredTasks = tasks.filter(([_, task]) => task.status === status)

  if (!filteredTasks.length) return <></>

  return (
    <VStack w='100%'>
      <Text fontWeight='bold'>{status}</Text>
      <VStack w='100%' gap='10px'>
        {filteredTasks.map(([id, task]) => (
          <TaskElement task={task} id={id} key={id} />
        ))}
      </VStack>
    </VStack>
  )
}

export default TaskSection
