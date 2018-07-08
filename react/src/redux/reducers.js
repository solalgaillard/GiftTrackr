import C from './constants'

export const storeList = (state={}, action) => {
    switch (action.type) {
        case C.LOAD_STORE_LIST:
            return action.stores
        default:
            return state
    }
}

export const storeDetails = (state={}, action) => {
    switch (action.type) {
        case C.LOAD_STORE_DETAILS:
            return action.storeDetails
        default:
            return state
    }
}

export const charityDetails = (state={}, action) => {
    switch (action.type) {
        case C.LOAD_CHARITY_DETAILS:
            return action.charityDetails
        default:
            return state
    }
}

