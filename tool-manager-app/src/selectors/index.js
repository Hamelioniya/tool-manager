export function createTool(state) {
    return {...state.form.add.values,
         id: state.toolsReducer.tools.length + 1}
}
