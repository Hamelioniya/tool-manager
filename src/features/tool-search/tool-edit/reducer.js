import {
    TOOL_FETCH_START,
    TOOL_FETCH_ERROR,
    TOOL_FETCH_SUCCESS,
} from './constants';

const initialState = {
    tools: [],
};
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOL_FETCH_START:
            return { ...state, loading: true };
        case TOOL_FETCH_ERROR:
            return { ...state, loading: false, error: action.error };
        case TOOL_FETCH_SUCCESS:
            return { ...state, loading: false, tool: action.tool, };
        default:
            return state;
    };
};
  
export default reducer