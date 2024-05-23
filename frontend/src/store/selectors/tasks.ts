import {RootState} from '../store'

export const selectTaskToEdit = (state: RootState) => state.tasks.taskToEdit

export const selectTaskToEditId = (state: RootState) => state.tasks.taskToEditId
