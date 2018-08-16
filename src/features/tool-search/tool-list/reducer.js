import {
    TOOLS_FETCH_START,
    TOOLS_FETCH_ERROR,
    TOOLS_FETCH_SUCCESS,
} from './constants';

const initialState = {
    tools: [],
};
  
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TOOLS_FETCH_START:
            return { ...state, loading: true };
        case TOOLS_FETCH_ERROR:
            return { ...state, loading: false, eror: action.error };
        case TOOLS_FETCH_SUCCESS:
            return { ...state, loading: false, tools: action.tools, };
        default:
            return state;
    }
};
  
export default reducer