import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ApolloProvider } from "react-apollo";

import { AddTool, EditTool, Tools } from '../features';

function App({ store, client }){
  return(
    <ApolloProvider store={store} client={client}>
      <Router>
          <Switch>
            <Route exact path="/" component={Tools} />
            <Route path="/new" component={AddTool} />
            <Route path="/:id" component={EditTool}/>
            <Redirect to="/" />
          </Switch>
      </Router>
    </ApolloProvider>
  )
};

export default App