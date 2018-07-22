import React from 'react'
import { connect } from 'react-redux'
import { editTool, getTool } from '../actions'
import EditToolForm from '../components/EditToolForm'
import { withRouter } from 'react-router-dom'
import { initialize } from 'redux-form'
import { validate}  from '../validate'

class EditTool extends React.Component{

  componentDidMount(){
    const id = this.props.match.params.id
    Promise.resolve(this.props.getTool(id))
    .then( () => { this.props.initializeForm(this.props.tool) })
  }

  render(){
    return(
      <div>
        <h1 align = "center">Edit Tool</h1>
        <EditToolForm errors={validate(this.props.newTool)}
            handleSubmit={() => {
            this.props.editTool(this.props.tool.id, this.props.newTool)
            this.props.history.push('/')
          }} 
          close={() =>this.props.history.push('/')} 
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    tool: state.toolsReducer.tool,
    newTool: state.form.edit === undefined ? null : state.form.edit.values
})

const mapDispatchToState = dispatch => ({
    getTool: (id) => { dispatch(getTool(id)) },
    editTool: (id, tool) => { dispatch(editTool(id, tool)) },
    initializeForm: (tool) => { dispatch(initialize('edit', tool)) }
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToState
)(EditTool))