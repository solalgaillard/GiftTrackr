import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { storeList, storeDetails, charityDetails} from './reducers'

const store = createStore(
    combineReducers({ storeList, storeDetails, charityDetails }),
    applyMiddleware(thunk)
)

export default store
