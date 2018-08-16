import {
    TOOLS_FETCH_START,
    TOOLS_FETCH_ERROR,
    TOOLS_FETCH_SUCCESS,
} from './constants';

export const fetchToolsStart = () => ({
    type: TOOLS_FETCH_START,
});

export const fetchToolsError = ({ error }) => ({
    type: TOOLS_FETCH_ERROR,
    error,
});

export const fetchToolsSuccess = ({ tools }) => ({
    type: TOOLS_FETCH_SUCCESS,
    tools,
});