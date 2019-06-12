import * as ActionTypes from '../actions/actionTypes';
import {call, put, all, select,takeEvery,takeLatest} from 'redux-saga/effects';
import request from '../utils/request';
import {EntityUserLoaded, EntityReferencesLoaded, EntityTicketsLoaded } from '../actions/entity';
import { SetLoading,SetError } from '../actions/global';
import { LoadCommentsById } from '../actions/comments';



const getFilter = (state) => state.Filter;
const getComments = (state) => state.Comments;
/************************************************************/
function* fetchAppUser() {
	const url = `me`;
	const obj = yield call(request.get, url)
	yield put(EntityUserLoaded(obj));
}

function* fetchReferences()
{
	const url = `api/v2/references`;
	const obj = yield call(request.get, url,{hash: "MDswOzA7MDsw"});
	yield put(EntityReferencesLoaded(obj))
}

function* fetchBasicAsync() {
		yield all([fetchAppUser(),fetchReferences()]) 
}

/***********************************************************/

function* fetchTickets()
{
	const url = `api/v2/tickets`;
 	const params = yield select(getFilter)
	const obj = yield call(request.get, url, params);
  yield put(EntityTicketsLoaded(obj))
}

function* fetchTicketsAsync()
{
	try {
		yield put(SetLoading(true))
		yield fetchTickets()
		yield put(SetLoading(false))
		} catch (error) {
		yield put(SetError()) }
}

/************************************************************/

function *fetchTicketComments(action) {
	const url = `api/v2/comments`;
	const ticketId=action.payload;
	const res= yield call(request.get, url, {ticketId});
	yield put(LoadCommentsById(res))	
}

function* fetchCommentsAsync()
{
	try {
		yield put(SetLoading(true))
		yield fetchTicketComments()
		yield put(SetLoading(false))
		} catch (error) {
		yield put(SetError()) }
}

/************************************************************/
export default function* rootSaga() {	
	yield fetchBasicAsync()
	yield fetchTicketsAsync()
	yield takeLatest('FETCHED_DOG', fetchTicketsAsync)
	yield takeLatest(ActionTypes.GET_TICKET_ID, fetchTicketComments)
	
}