import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Task, Tasks} from '../interfaces'

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: ['Task'],
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
  endpoints: builder => ({
    getTasks: builder.query<Tasks, void>({
      query: () => '/tasks',
      providesTags: ['Task'],
    }),
    addTask: builder.mutation<string, Task>({
      query: (newTodo: Task) => ({
        url: '/tasks',
        method: 'POST',
        body: newTodo,
      }),
      invalidatesTags: ['Task'],
    }),
    updateTask: builder.mutation<string, {id: string; task: Partial<Task>}>({
      query: ({id, ...task}) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        body: task,
      }),
      invalidatesTags: ['Task'],
    }),
    deleteTask: builder.mutation<string, {id: string}>({
      query: ({id}) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Task'],
    }),
  }),
})

export const {
  useLazyGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = apiSlice
