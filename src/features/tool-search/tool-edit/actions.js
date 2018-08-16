import {
    TOOL_FETCH_START,
    TOOL_FETCH_ERROR,
    TOOL_FETCH_SUCCESS,
} from './constants';

export const fetchToolStart = () => ({
    type: TOOL_FETCH_START,
});

export const fetchToolError = ({ error }) => ({
    type: TOOL_FETCH_ERROR,
    error,
});

export const fetchToolSuccess = ({ tool }) => ({
    type: TOOL_FETCH_SUCCESS,
    tool,
});