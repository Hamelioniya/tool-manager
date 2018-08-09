import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { graphql } from 'react-apollo';

import { fetchToolStart, fetchToolError, fetchToolSuccess } from './actions';
import ToolForm from '../../shared/tool-form';
import { updateTool } from './mutations';
import { fetchTools } from './queries';

class EditToolContainer extends React.Component{

  componentDidMount() {
    this.props.fetchTool(this.props.match.params.id)
  }

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
        <h1 align = "center">Edit Tool</h1>
        <ToolForm
            initialValues={this.props.tool}
            onSave={this.handleSave}
            onClose={this.handleClose} 
        />
      </React.Fragment>
    );
  };
};

const withMutation = graphql(updateTool);
const withQuery = graphql(fetchTools);

const mapStateToProps = state => ({
    tool: state.edit.tool,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTool: ({ id }) => {
    dispatch(fetchToolStart());
    ownProps.query()
    .then((data) => {
      for (var i = 0; i < data.tools.length; i++) {
        if (data.tools[i].id == id)
        dispatch(fetchToolSuccess(data.tools[i]));
    }}).catch((error) => {
      dispatch(fetchToolError({ error }));
    });
  },
});

const withStore = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withQuery, withMutation, withStore, withRouter)(EditToolContainer)