import {call, put, all } from 'redux-saga/effects'
import request from '../utils/request';
import {EntityUserLoaded, EntityReferencesLoaded} from '../actions/entity';
import { SetLoading,SetError } from '../actions/global';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* fetchAppUser() {
	yield delay(1000)
	const url = `me`;
	const obj = yield call(request.get, url)
	yield put(EntityUserLoaded(obj));
}

function* fetchReferences()
{
	const url = `api/v2/references`;
	const obj = yield call(request.get, url)
	yield put(EntityReferencesLoaded(obj))
}

function* fetchEntityAsync() {
  try {
		yield put(SetLoading(true))  
  	yield all([fetchAppUser(),fetchReferences()]) 
    yield put(SetLoading(false))
	} catch (error) {
    yield put(SetError())
  }
}




export default function* rootSaga() {
	yield fetchEntityAsync()  
}