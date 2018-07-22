const initialState = {
  tools: [
    {id: 0, name: 'tool1', type: 'drill', location: 'box A'},
    {id: 1, name: 'tool2', type: 'drill', location: 'box B'}
  ]
}

function toolsReducer (state = initialState, action) {
  switch (action.type) {

    case 'TOOLS_FETCHED':
      return state

    case 'ADD_TOOL':
      return Object.assign({}, state, {
        tools: [...state.tools, action.tool]
      })

    case 'GET_TOOL':
      for (var i = 0; i < state.tools.length; i++) {
        if (state.tools[i].id == action.id)
          return Object.assign({}, state, {
            tool: state.tools[i]
        })
      }

    case 'EDIT_TOOL':
      return Object.assign({}, state, {tools:
        state.tools.map(tool =>
          (tool.id === action.id)
          ? {...action.tool, id: action.id}
          : tool)})
      
    default:
      return state
  }
}
  
export default toolsReducer