import React, { PropTypes, Component } from 'react'
import cx from 'classnames';
import styles from './store-list.css'


export class Stores extends Component {

    constructor(props) {
        super(props)
        this.state = { address: '' }
        this.submit = this.submit.bind(this)
    }

    submit(event){
        const {_address} = this.refs
        const {apiCall} = this.props;
        event.preventDefault();
        let modAddress = _address.value.replace(/\s/g, '+');
        getAddress(`http://maps.googleapis.com/maps/api/geocode/json?address=${modAddress}&sensor=false`)
            .then(json => {
                let lat = json.results[0].geometry.location.lat, long = json.results[0].geometry.location.lng ;
                apiCall({lat:lat, long:long});
            })
            .catch(error => {throw(error)});

    }

    componentWillMount() {
        const {apiCall} = this.props;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude, long = position.coords.longitude;
                console.log(lat, long);
                apiCall({lat:lat, long:long});
                getAddress(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=true`)
                    .then(json => {
                        if (json.hasOwnProperty('results') && json.results[0]) {
                            this.setState({
                                address: json.results[0].formatted_address
                            })
                        }
                        })
                    .catch(error => {
                            throw(error);
                        });
            });
        } else {
            alert("No Geolocalisation on your system");
        }





    }

    render() {
        const {address} = this.state
        const {storeList} = this.props;
        return (
            <div className={cx('location','row', 'center-xs')}>
                <div className={cx('col-xs-7')}>
                    <input ref="_address" type="text" placeholder={address}/>
                <button onClick={this.submit}>Get Stores</button>
                </div>
                {Object.keys(storeList).map( (objKey, i) => (
                    <div key={i}>
                        <h2 className={cx('col-xs-8')} >{storeList[objKey].storeName}</h2>
                        <a href='#/store/423'><img src={storeList[objKey].icon} className={cx('col-xs-8', 'img')} /></a>
                        <p className={cx('')} >{storeList[objKey].address}</p>

                    </div>
                ))}
            </div>
        );
    }

}
var getAddress = (url) => {
    return fetch(url).then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
}