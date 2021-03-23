import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import App from './components/App'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk)),
)

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

const rootElement = document.getElementById('root')

ReactDOM.render(<Root />, rootElement)
