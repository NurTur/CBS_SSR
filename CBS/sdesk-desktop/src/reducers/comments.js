import { GET_TICKET_ID, LOAD_COMMENTS_ID } from "../actions/actionTypes";

const InitalState ={ ticketId:null, comments:[] }

function Comments(state = InitalState, action) {
    switch (action.type) {
        case GET_TICKET_ID: return Object.assign({},state,{ticketId:action.payload}); 
        case LOAD_COMMENTS_ID: return Object.assign({},state,{comments:action.payload});       
        default: return state;
    }
};

export default Comments;