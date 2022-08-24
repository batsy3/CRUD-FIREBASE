import {applyMiddleware, legacy_createStore as createstore} from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

const store = createstore(reducer, {}, applyMiddleware(thunk))

export default store