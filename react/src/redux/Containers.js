import { connect } from "react-redux"
import { Stores } from '../components/storeList/StoreList.js'
import {loadStores, loadStoreDetails, loadCharityDetails} from './actions.js'
import {StoreDetails} from "../components/storeDetails/StoreDetails";
import {CharityDetails} from "../components/charityDetails/CharityDetails";


export const StoreList = connect (
    state =>({
        storeList: state.storeList
    }),
    dispatch => ({
        apiCall(body) {
            dispatch(loadStores(body))
        }
    })
)(Stores)

export const StoreAllDetails = connect(
    state =>({
        storeDetails: state.storeDetails
    }),
    dispatch => ({
        apiCallSt(query) {
            dispatch(loadStoreDetails(query))
        }
    })
)(StoreDetails)


export const CharityAllDetails = connect (
    state =>({
        charityDetails: state.charityDetails
    }),
    dispatch => ({
        apiCallCh() {
            dispatch(loadCharityDetails())
        }
    })
)(CharityDetails)