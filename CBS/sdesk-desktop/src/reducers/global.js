import { UPDATE_COLUMN,SET_LOADING,SET_ERROR,GET_TICKET_ID } from "../actions/actionTypes";

const InitalState ={ columns:
[{id:1, value:"Номер заявки",status:true, constant:true}, 
{id:2, value:"Вид работ",status:true,constant:true},
{id:3, value:"Дата подачи",status:true,constant:true},
{id:4, value:"Гарантия",status:false,constant:false},
{id:5, value:"Гарантия CBS",status:false,constant:false},
{id:6, value:"Гарантия до",status:false,constant:false},
{id:7, value:"Гарантия CBS до",status:false,constant:false},
{id:8, value:"№ заказа",status:false,constant:false},
{id:9, value:"Заказчик",status:true,constant:true},
{id:10, value:"Статус",status:true,constant:true},
{id:11, value:"Срок ожидания до",status:false,constant:false},
{id:12, value:"Исполнитель",status:true,constant:true},
{id:13, value:"Оборудование.TM",status:false,constant:false},
{id:14, value:"Оборудование.SN",status:false,constant:false},
{id:15, value:"Рег.номер",status:true,constant:true},
{id:16, value:"Устройство",status:false,constant:false},
{id:17, value:"Город",status:false,constant:false},
{id:18, value:"Субподрядчик",status:false,constant:false},
{id:19, value:"Причины неисправности",status:false,constant:false}],
request:  {loading: false, error: false} }

function Global(state = InitalState, action) {
    switch (action.type) {
        case UPDATE_COLUMN: return Object.assign({},state,{columns:action.payload}); 
        case SET_LOADING: return Object.assign({},state,{request:{ loading:action.payload, error:false}});
        case SET_ERROR: return Object.assign({},state,{request:{ loading: false, error: true }});
        default: return state;
    }
};

export default Global;
