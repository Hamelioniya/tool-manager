import React from 'react'
import { connect } from 'react-redux'
import { addTool } from '../actions'
import AddToolForm from '../components/AddToolForm'
import { withRouter } from 'react-router-dom'
import { validate } from '../validate'
import { createTool } from '../selectors'

class AddTool extends React.Component{
  render(){
    return(
      <div>
        <h1 align="center">Add Tool</h1>
        <AddToolForm errors={validate(this.props.tool)}
          handleSubmit={() => {
            this.props.addTool(this.props.tool)
            this.props.history.push('/')
          }} 
          close={() => this.props.history.push('/')} 
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tool:  state.form.add === undefined ? null : createTool(state)
})

const mapDispatchToState = dispatch => ({
  addTool: (tool) => { dispatch(addTool(tool)) }
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToState
)(AddTool))