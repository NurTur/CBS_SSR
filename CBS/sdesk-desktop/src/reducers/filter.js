import * as ActionTypes from "../actions/actionTypes";

const fields={ customer:["id", "name"],
                       equipment:["id", "endWarrantyDate", "id", "endCBSWarrantyDate", "id", "serialNumber", "id", "regNumber", "id", "bnaFlag"],
                       equipmentType:["id", "name", "model"],
                       performer:["id", "name"],
                       ticket:["id", "vendorId", "typeId", "number", "serviceTypeId", "date", "warrantyFlag", "cbsWarrantyFlag", "commonFieldString", "statusId","cityId","subcontractorFlag","reasonDescription"],
                       timeout:["timeout"] };
                       const filters={ticket:{statusId:{$in:[1,3,4,5,6,15,18,20,21,22,24,25,26,27,29,30,31]}}}
                       const count=true;
                       const sort={ticket: {date: "desc"}};
                       const limit=[100,0];


                    

const initialState = { filters,fields,sort,limit,count };
      
                    
function Filter(state = initialState, action) {
    switch (action.type) {
    case ActionTypes.ADD_REQUEST: 
    const obj=Object.assign({},{ticket: Object.assign({},state.filters.ticket,action.payload)});
        return Object.assign({},state,{filters:obj}); 
      
    case ActionTypes.REMOVE_REQUEST: 
    let res = Object.assign({}, state)
    delete res.filters.ticket[action.payload];
    return res;

    default: return state;
	}
}

export default Filter;