import React, { PropTypes, Component } from 'react'
import cx from 'classnames';
import styles from './store-details.css'


export class StoreDetails extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        console.log(params.storeId)
        const {apiCallSt} = this.props;
        apiCallSt(params.storeId)
        const {storeDetails} = this.props;
        console.log(storeDetails.details)

    }


    render() {
        const {storeDetails} = this.props;
        return (
            <div className={cx('img', 'center-xs')}>
                <img className={cx('img', 'col-xs-8')} src={storeDetails.details && storeDetails.details.icon} />
                <h1>{storeDetails.details && storeDetails.details.storeName}</h1>
                <p>{storeDetails.details && storeDetails.details.address}</p>
                <h1>Partnering Charities:</h1>
                <a href='#/charity'><h3>Bread for the City</h3></a>
                <h3>Food bank and legal services</h3>
                <h3>United Way</h3>
                <h3>Health and education</h3>
            </div>
        );
    }

}
