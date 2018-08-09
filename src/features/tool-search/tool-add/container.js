import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { graphql } from 'react-apollo';

import ToolForm from '../../shared/tool-form';
import { addTool } from './mutations';

class AddToolContainer extends React.Component{

  handleSave = (tool) => {
    this.props.mutate({ variables: tool })
      .then(() => {
        this.props.history.push('/');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handleClose = () => {
    this.props.history.push('/')
  }

  render(){
    return(
      <React.Fragment>
        <h1 align="center">Add Tool</h1>
        <ToolForm 
          initialValues={{}}
          onSave={this.handleSave}
          onClose={this.handleClose} 
        />
      </React.Fragment>
    );
  };
};

const withMutation = graphql(addTool);

export default compose(withMutation, withRouter)(AddToolContainer)