import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import AddTool from '../containers/AddTool'
import EditTool from '../containers/EditTool'
import ToolsList from '../containers/ToolsList'

function Root({ store, persistor }){
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
            <div>
              <Route exact path="/" component={ToolsList} />
              <Switch>
                <Route path="/new" component={AddTool} />
                <Route path="/:id" component={EditTool}/>
              </Switch>
            </div>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default Root