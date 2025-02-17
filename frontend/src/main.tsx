import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ChakraProvider} from '@chakra-ui/react'
import {Provider} from 'react-redux'
import {store} from './store/store.ts'
import {Toaster} from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <Toaster position='top-right' reverseOrder={true} />
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
)
