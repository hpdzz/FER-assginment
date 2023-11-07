import React, { useEffect, useState } from 'react';
import styles from '../Header/Header.module.scss';
// import styles1 from '../../AboutLayout/AboutLayout.modules.scss';
import classNames from 'classnames/bind';
import routes from '../../../config/routes';
import logo from '../../../asset/images/bird-on-branch-svgrepo-com.png';
import MenuItem from './Menu/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from './Menu';
import config from '../../../config/';
import Login from './Login';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('header-inner')}>
                <div className={cx('inner-left')}>
                    <a href={routes.home} className={cx('header-brand')}>
                        <img src={logo} alt="logo" />
                    </a>
                </div>

                <div className={cx('inner-center')}>
                    <Menu>
                        <MenuItem title="Home" to={config.routes.home} />
                        <MenuItem title="About" to={config.routes.about} />
                        <MenuItem title="Contact" to={config.routes.contact} />
                        <MenuItem title="Products" to="/products" />
                        <MenuItem title="News" to="/news" />
                    </Menu>
                </div>

                <div className={cx('inner-right')}>
                    {/* <span>
                        <ShoppingCartIcon fontSize="large" />
                    </span> */}
                    <div className="navbar-btns">
                        <Link to="/cart" className="add-to-cart-btn flex">
                            <span className="btn-ico">
                                <ShoppingCartIcon fontSize="large" />
                                <span className="cart-count-value">{}</span>
                            </span>
                            {/* <div className="btn-txt fw-5">Cart</div> */}
                        </Link>
                    </div>
                    <Link style={{ paddingLeft: '25px' }} to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
