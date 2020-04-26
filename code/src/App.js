import React from 'react'
import { StartPage } from 'components/StartPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {createStore, combineReducers} from 'redux'
import {Form} from './components/Form'
import {EndPage} from './components/EndPage'
import { Provider } from 'react-redux'
import {survey} from './reducers/survey'

const reducer = combineReducers({
  survey: survey
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const App = () => {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/form" exact component={Form} />
          <Route path="/endpage" exact component={EndPage} />
        
        </Switch>
    </BrowserRouter>
    </Provider>

  )
}


