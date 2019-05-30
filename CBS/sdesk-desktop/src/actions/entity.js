import * as ActionTypes from './actionTypes';

export const EntityUserLoaded = (obj) => 
({ type: ActionTypes.ENTITY_USER_LOADED, payload: obj });
export const EntityReferencesLoaded = (obj) => 
({ type: ActionTypes.ENTITY_REFERENCES_LOADED, payload: obj });
export const EntityRequest = () =>({type:  ActionTypes.ENTITY_REQUEST });