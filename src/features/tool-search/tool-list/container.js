import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose } from 'redux';

import AddToolButton from '../../shared/components/add-button';
import ToolsComponent from './component';
import { fetchToolsStart, fetchToolsSuccess, fetchToolsError } from './actions';
import { fetchTools } from './queries';

class ToolsListContainer extends React.Component{

  componentWillMount(){
    this.props.getTools();
  };

  render(){
    const { data: { loading, error, tools } } = this.props;

    if (loading)
      return <p>Loading...</p>
    
    if (error)
      return <p>{error.message}</p>

    return(
      <React.Fragment>
        <h1 align="center">Tool manager</h1>
        <AddToolButton />
        <ToolsComponent tools={tools} />
      </React.Fragment>
    );
  };
};

const mapStateToProps = state => ({
  loading: state.list.loading,
  error: state.list.error,
  tools: state.list.tools,
});

const withQuery = graphql(fetchTools);

const mapDispatchToProps = (dispatch, ownProps) => ({
  getTools: () => {
    if (ownProps.data.loading)
      dispatch(fetchToolsStart());
    else if (ownProps.data.error)
      dispatch(fetchToolsError(ownProps.data.error));
    else
      dispatch(fetchToolsSuccess(ownProps.data.tools));
  },
});


const withStore = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withStore, withQuery)(ToolsListContainer)