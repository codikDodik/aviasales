import React from 'react'
import ReactDOM from 'react-dom/client'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './store/root.reducer'
import App from './components/App'

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
