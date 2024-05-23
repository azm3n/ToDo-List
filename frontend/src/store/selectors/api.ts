import {createSelector} from '@reduxjs/toolkit'
import {apiSlice} from '../../api/apiSlice'

export const createGetTasksSelector = () =>
  createSelector(selectTasks(), result => {
    const tasks = result?.data ?? []
    return tasks
  })

export const selectTasks = () => apiSlice.endpoints.getTasks.select()
