import React, { PropTypes, Component } from 'react'
import cx from 'classnames';
import styles from './scan-bar-code.css'


export class ScanBarCode extends Component {

    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
        this.state = {isMatch:false, hasSent:false, product: null}
    }

    submit(event) {
        const {_number} = this.refs

        event.preventDefault();
        sendCode(`https://cors.io/?https://api.barcodelookup.com/v2/products?barcode=${_number.value}&formatted=y&key=0u4rnxuf7b7jr4yov6okzkfdqqqo0o`)
            .then(json => {
                console.log(json)
                    this.setState({
                        hasSent: true,
                        isMatch: true,
                        product: json.products[0]
                    })

            })
            .catch(error => {
                throw(error);
            });

    }


/*get fake qr code*/

    render() {
        const {hasSent, isMatch, product} = this.state
        return (
            <div className="scanBarCode">
                {!hasSent &&
                    <div>
                <input ref="_number" type="text"/>
                <button onClick={this.submit}>Scan</button>
                    </div>
                }
                {hasSent && isMatch &&
                    <div>
                    <div>It's a match!</div>
                        <h1>{product.product_name}</h1>
                        <img src={product.images[0]}/>
                        <a href="#/qr"><button>Checkout</button></a>
                    </div>}
                {hasSent && !isMatch &&
                <div>Failure</div>}

            </div>
        );
    }

}
var sendCode = (url) => {
    return fetch(url).then(response => {
        if (response.ok){
        return response.json()}
        else throw "error";
    }).catch(error => {
        return error;
    });
}