import React from 'react'
import styles from './nav-bar.css'
import cx from "classnames";

const NavBar = (props) =>
    <div className={cx('nav','row', 'center-xs')}>
        <img className={cx('back')} onClick={window.history.back()} src='https://image.flaticon.com/icons/png/512/54/54906.png'/>
        <div className={cx('title')}>GiftTrackr</div>
        <img className={cx('cart')} src="https://www.freeiconspng.com/uploads/cart-icon-16.png" />
    </div>


export default NavBar