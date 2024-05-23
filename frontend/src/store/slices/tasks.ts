import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import {Task} from '../../interfaces'
import {DEFAULT_TASK} from '../../constants'

type InitialStateProps = {
  taskToEdit: Task
  taskToEditId: string | null
}

export const initialState: InitialStateProps = {
  taskToEdit: DEFAULT_TASK,
  taskToEditId: null,
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTaskToEdit: (state, action: PayloadAction<Task>) => {
      state.taskToEdit = action.payload
    },
    setTaskToEditId: (state, action: PayloadAction<string | null>) => {
      state.taskToEditId = action.payload
    },
  },
})

export const tasksActions = tasksSlice.actions
export default tasksSlice
