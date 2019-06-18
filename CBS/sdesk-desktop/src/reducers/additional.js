import * as ActionTypes from "../actions/actionTypes";

const InitalState ={ ticketId:null, comments:[],history:[] }

function Additional(state = InitalState, action) {
    switch (action.type) {
        case ActionTypes.GET_TICKET_ID: return Object.assign({},state,{ticketId:action.payload}); 
        case ActionTypes.LOAD_COMMENTS_ID: return Object.assign({},state,{comments:action.payload});
        case ActionTypes.LOAD_HISTORY_ID : return Object.assign({},state,{history:action.payload});       
        default: return state;
    }
};

export default Additional;