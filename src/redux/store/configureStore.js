import { createStore, applyMiddleware  } from 'redux'
import fetchUsers from '../asyncAction/asynAction'
import logger from '../middlewares/logger1'
import rootReducer from './combinestores'
import monitorReducerEnhancer from '../enhancer/monitorReducer'
import loggerMiddleware from '../middlewares/logger'
import { composeWithDevTools } from 'redux-devtools-extension'

/*  specific configuration of store for using all of the redux options*/


const thunkMiddleware =require ('redux-thunk').default



export default function configureStore(preloadedState) {
    

  const middlewares = [loggerMiddleware,logger, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)
  console.log(store.getState())
  store.dispatch(fetchUsers())

  return store
}

















/* 
export default function configureStore(preloadedState) {
    const middlewares = [loggerMiddleware, thunkMiddleware,logger]
    const middlewareEnhancer = applyMiddleware(...middlewares)
  
    const enhancers = [middlewareEnhancer, monitorReducerEnhancer]
    const composedEnhancers = compose(...enhancers)
    console.log(store.getState())

    const store = createStore(rootReducer, preloadedState, composedEnhancers)
    
    store.dispatch(fetchUsers())

    if (process.env.NODE_ENV !== 'production' && module.hot) {
        module.hot.accept('./combinestores', () => store.replaceReducer(rootReducer))
      }
    
    return store
  }

 */

/* store asli ke shamel tarkib reducer hast */

/* const store = createStore(rootReducer,applyMiddleware(logger,thunkMiddleware))
console.log(store.getState())

store.dispatch(fetchUsers())

export default store */