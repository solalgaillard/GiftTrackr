import C from './constants'

class ServerCalls {
    static getHttp(url) {
        return fetch(url).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static postHttp(url, body) {
        return fetch(url,{
                        method: 'POST',
                        headers:  {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        } ,
                            body: JSON.stringify(body)})
    .then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}


function loadStoreList(stores) {
    return {type: C.LOAD_STORE_LIST, stores};
}

export function loadStores(body) {
    return function(dispatch) {
        return ServerCalls.getHttp('https://raw.githubusercontent.com/CameronPennington/charityapp/master/storelist.json')
            .then(storeList => {
                console.log(storeList)
            dispatch(loadStoreList(storeList));
        }).catch(error => {
            throw(error);
        });
    };
}

function loadStoreDetailsAction(storeDetails) {
    return {type: C.LOAD_STORE_DETAILS, storeDetails};
}


export function loadStoreDetails(query) {
    return function(dispatch) {
        return ServerCalls.getHttp('https://raw.githubusercontent.com/CameronPennington/charityapp/master/walmart.json')
            .then(storeDetails => {
                dispatch(loadStoreDetailsAction(storeDetails));
            }).catch(error => {
                throw(error);
            });
    };
}


function loadCharityDetailsAction(charityDetails) {
    return {type: C.LOAD_CHARITY_DETAILS, charityDetails};
}


export function loadCharityDetails() {
    return function(dispatch) {
        return ServerCalls.getHttp('https://jsonplaceholder.typicode.com/posts/1')
            .then(charityDetails => {
                dispatch(loadCharityDetailsAction(charityDetails));
            }).catch(error => {
                throw(error);
            });
    };
}