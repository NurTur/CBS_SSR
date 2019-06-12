import * as ActionTypes from './actionTypes';

export function LoadComments() { return {type: ActionTypes.LOAD_COMMENTS} }
export const GetTicketId = (Id) => ({ type: ActionTypes.GET_TICKET_ID, payload: Id });

export function LoadCommentsById(payload) {
	return {
		type: ActionTypes.LOAD_COMMENTS_ID,
		payload
	}
}
export function PostComment(payload) {
	return {
		type: ActionTypes.POST_COMMENT,
		payload
	}
}


export function SetDisplayType(type) {
	return {
		type: ActionTypes.SET_TYPE,
		payload: type
	}
}

export function DeleteComment(commentId) {
	return {
		type: ActionTypes.DELETE_COMMENT,
		payload: commentId
	}
}

export function PostComment(payload) {
	return {
		type: ActionTypes.POST_COMMENT,
		payload
	}
}

export function EditComment(payload) {
	return {
		type: ActionTypes.EDIT_COMMENT,
		payload
	}
}

export function PrepareOptions(payload) {
	return {
		type: ActionTypes.PREPARE_OPTIONS,
		payload
	}
}

export function LoadParentDevices(payload) {
	return {
		type: ActionTypes.LOAD_PARENT_DEVICES,
		payload
	}
}

export function MergeParentDevices(payload) {
	return {
		type: ActionTypes.MERGE_PARENT_DEVICES,
		payload
	}
}

export function LoadChildrenDevices(payload) {
	return {
		type: ActionTypes.LOAD_CHILDREN_DEVICES,
		payload
	}
}

export function SetCascaderOption(payload) {
	return {
		type: ActionTypes.SET_CASCADER_OPTION,
		payload
	}
}
