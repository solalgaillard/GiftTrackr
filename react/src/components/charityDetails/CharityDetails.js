import React, { PropTypes, Component } from 'react'
import {ScanBarCode} from '../scan/ScanBarCode'
import cx from 'classnames';
import styles from './charity-details.css'


export class CharityDetails extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const {apiCallCh} = this.props;
        apiCallCh()
    }

    render() {
        const {charityDetails} = this.props;
        return (
            <div className={cx("charityDetail", 'center-xs')}>
                <h4>Bread for the City</h4>
                <p> MSP is unique in offering a full continuum of care from emergency shelter through transitional-to-permanent housing. Our experienced team of case managers and residential counselors provides clinical counseling, case management, and comprehensive services to empower survivors to recover and thrive. MSP also provides training, case consultation, and advocacy to engage communities to prevent violence and abuse.</p>
                <p>
                    They need food.
                </p>
                <img src="https://images.formget.com/wp-content/uploads/2015/01/progress-bar-type-1.png" />

                    <ScanBarCode/>
            </div>
        );
    }

}
