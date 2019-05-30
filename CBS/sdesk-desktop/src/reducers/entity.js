import * as ActionTypes from "../actions/actionTypes";

const initialState = { appUser: {}, references:{} }
	  
function Entity(state = initialState, action) {
	switch (action.type) {
	case ActionTypes.ENTITY_USER_LOADED: 
    	return Object.assign({},state,{appUser:action.payload})
	case ActionTypes.ENTITY_REFERENCES_LOADED: 
    	return Object.assign({},state,{references:action.payload})
	default: return state
	}
}

export default Entity;