import './Header.scss';
import CartIcon from './CartIcon';

const Header = () => {
    return (
        <div className="header">
            <div className="nav container">
                <div className="header__title">React Store - Webshop</div>
                <div className="icons">
                    <CartIcon />
                </div>
            </div>
        </div>
    )
}

export default Header