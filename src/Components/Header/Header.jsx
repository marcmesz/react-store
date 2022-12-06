import './Header.scss';
import CartIcon from './CartIcon';
import { IoIosMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Header = props => {
    const handleClick = () => {
        props.setMobile(prev => !prev)
    }

    return (
        <div className="header">
            <div className="nav container">
                <div className="header__title">
                    <Link to="/">
                        React Store - Webshop
                    </Link>
                </div>
                <div className="icons">
                    <Link to="/cart">
                        <CartIcon />
                    </Link>
                    <IoIosMenu className="mobile-menu" onClick={handleClick} />
                </div>
            </div>
        </div>
    )
}

export default Header