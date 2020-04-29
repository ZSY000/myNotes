import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const initialState = {}
const middleware = [thunk]

export const store = createStore(
  rootReducer, 
  initialState, 
  // compose用于整合中间件
  compose(
    applyMiddleware(...middleware),
    
    //添加Redux扩展工具 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
