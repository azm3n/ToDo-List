import {Select} from '@chakra-ui/react'
import {Status} from '../interfaces'
import {FC} from 'react'

type Props = {
  value?: Status
  changeStatusHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const StatusSelect: FC<Props> = ({value, changeStatusHandler}) => {
  return (
    <Select {...(value && {value})} onChange={changeStatusHandler}>
      <option unselectable='on' disabled value=''>
        Select status of task
      </option>
      <option value={Status.TODO}>To do</option>
      <option value={Status.IN_PROGRESS}>In progress</option>
      <option value={Status.DONE}>Done</option>
    </Select>
  )
}

export default StatusSelect
