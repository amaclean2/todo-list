import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import monitorReducersEnhancer from './Enhancers/monitorReducer'
import todoApp from './reducers'

const loggerMiddleware = createLogger()

export const configureStore = preloadedState => {
    const
        middewares = [loggerMiddleware, thunkMiddleware],
        middlewareEnhancer = applyMiddleware(...middewares),
        
        enhancers = [middlewareEnhancer, monitorReducersEnhancer]
        composedEnhancers = composeWithDevTools(...enhancers)

    return createStore(todoApp, preloadedState, composedEnhancers)
}