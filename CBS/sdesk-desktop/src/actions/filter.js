import * as ActionTypes from './actionTypes';
export const AddRequest = (data) =>({type:  ActionTypes.ADD_REQUEST, payload:data });
export const RemoveRequest = (data) =>({type:  ActionTypes.REMOVE_REQUEST, payload:data });
