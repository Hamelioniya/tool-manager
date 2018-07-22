export const addTool = (tool) => ({ type: 'ADD_TOOL', tool })
export const getTool = (id) => ({ type: 'GET_TOOL', id })
export const editTool = (id, tool) => ({ type: 'EDIT_TOOL', id, tool })

export const fetchTools = (tools) => ({ type: 'TOOLS_FETCHED', tools })

export const redirectPage = (route) => ({ type: 'REDIRECT_TO_PAGE', route })