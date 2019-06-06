import {call, put, all, select,takeEvery} from 'redux-saga/effects';
import request from '../utils/request';
import {EntityUserLoaded, EntityReferencesLoaded, EntityTicketsLoaded } from '../actions/entity';
import { SetLoading,SetError } from '../actions/global';
import {requestDog,requestDogSuccess,requestDogError } from "../actions/dogs";


const getFilter = (state) => state.Filter;
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

function* fetchTicketsClick()
{
	try {
		yield put(SetLoading(true))
		yield fetchTickets()
		yield put(SetLoading(false))
		} catch (error) {
		yield put(SetError()) }
}
/************************************************************/
// Sagas
function* watchFetchDog() {
  yield takeEvery('FETCHED_DOG', fetchTicketsClick);
}

export default function* rootSaga() {	
	yield fetchBasicAsync()
	yield fetchTicketsAsync()
	yield watchFetchDog()
}