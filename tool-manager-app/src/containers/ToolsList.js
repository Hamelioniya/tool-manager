import React from 'react'
import { connect } from 'react-redux'
import ToolsTable from '../components/ToolsTable'
import { fetchTools } from '../actions'
import AddToolButton from '../components/AddToolButton'

class ToolsList extends React.Component{

  constructor(props){
    super(props)
    this.props.getAllTools()
  }

  render(){
    return(
      <div>
        <h1 align="center">Tool manager</h1>
        <AddToolButton />
        <ToolsTable tools={this.props.tools} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tools: state.toolsReducer.tools
})

const mapDispatchToState = dispatch => ({
  getAllTools: () => { dispatch(fetchTools()) }
})

export default connect(
  mapStateToProps,
  mapDispatchToState
)(ToolsList)